import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const getRootPath = () => {
	const absPath = process.cwd();
	const docsPrefix = 'public/notes';
	return path.resolve(absPath, docsPrefix);
};
const publicFolder = path.resolve(process.cwd(), 'public');
async function listFiles(dir, relPath) {
	const topics = {
		path: '',
		files: [],
		folders: [],
	};
	try {
		const entries = await fs.readdir(dir, { withFileTypes: true });
		const filesArray = [];
		const foldersArray = [];
		for (const entry of entries) {
			if (entry.isFile()) {
				const pathObj = path.parse(entry.name);
				if (pathObj.ext === '.md' || pathObj.ext === '.mdx') {
					const prefix = path.relative(publicFolder, dir);
					const absPath =
						prefix === ''
							? pathObj.name + pathObj.ext
							: prefix + path.sep + pathObj.name + pathObj.ext;
					filesArray.push({
						name: pathObj.name,
						extension: pathObj.ext,
						absPath,
						key: uuidv4(),
					});
				}
			}
			if (entry.isDirectory()) {
				const subTopic = await listFiles(path.resolve(dir, entry.name), dir);
				if (subTopic.files.length !== 0) {
					foldersArray.push(subTopic);
				}
			}
		}
		topics.files = filesArray;
		topics.folders = foldersArray;
		topics.path = path.relative(relPath, dir);
		topics.absPath = path.relative(getRootPath(), dir);
	} catch (err) {
		console.log(err);
	}
	return topics;
}

// const writeFile = async () => {
//     const result = await listFiles(getRootPath(), getRootPath());
//     const jsonString = JSON.stringify(result, null, 2);
//     fs.writeFile('./test.json', jsonString, 'utf8');
// };
// writeFile();
//持久化文档结构在内存中
let CONSTANT_TOPICS = await listFiles(getRootPath(), getRootPath());

const traversDir = async () => {
	if (!CONSTANT_TOPICS) {
		CONSTANT_TOPICS = await listFiles(getRootPath(), getRootPath());
	}
	return CONSTANT_TOPICS;
};

export const getMDXContent = async route => {
	//TODO parse the error to front end
	const absRoute = path.resolve(publicFolder, route);
	let mdxContent = '';
	try {
		mdxContent = await fs.readFile(absRoute, 'utf-8');
	} catch (err) {
		console.error('Error reading file' + err);
	}
	return mdxContent;
};

export default traversDir;

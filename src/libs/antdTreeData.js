const traversTree = (docsTree, level = 0) => {
    const antdTree = [];
    const { folders, files } = docsTree;
    folders.forEach((folder) => {
        const node = {
            title: folder.path,
            key: folder.absPath,
            isLeaf: false,
        };
        node.children = traversTree(folder, level + 1);
        antdTree.push(node);
    });
    files.forEach((file) => {
        const node = {
            title: file.name,
            isLeaf: true,
            // absPath: file.absPath,
            key: file.absPath
        };
        antdTree.push(node);
    });

    return antdTree;
};

export default traversTree;
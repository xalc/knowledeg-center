
import NavTree from "@/components/navTree";
import traversDir from "@/app/api/libs/mdxparser.js";
import traversTree from "@/app/api/libs/antdTreeData.js";


const NavPage = async () => {
    const topics = await traversDir();
    const antdTree = traversTree(topics);
    return <NavTree treeData={antdTree} />
}
export default NavPage;
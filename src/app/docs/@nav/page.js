
import NavTree from "@/components/navTree";
import traversDir from "@/libs/mdxparser.js";
import traversTree from "@/libs/antdTreeData.js";


const NavPage = async () => {
    const topics = await traversDir();
    const antdTree = traversTree(topics);
    return <NavTree treeData={antdTree} />
}
export default NavPage;
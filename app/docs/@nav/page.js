
import NavTree from "../../src/components/navTree";
import traversDir from "@/api/libs/mdxparser";
import traversTree from "@/api/libs/antdTreeData";


const NavPage = async () => {
    const topics = await traversDir();
    const antdTree = traversTree(topics);
    return <NavTree treeData={antdTree} />
}
export default NavPage;
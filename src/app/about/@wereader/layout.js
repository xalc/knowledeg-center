
import { Tabs } from "antd";

export default function WeReaderLayout({ children, summary }) {

    const tabItems = [{
        label: '读过的书',
        key: 'tab_1',
        children: WrapTabItem(children)
    }, {
        label: '汇总',
        key: 'tab_2',
        children: WrapTabItem(summary)
    }];
    return <Tabs
        defaultActiveKey="tab_2"
        size='small'
        items={tabItems}
        type='card'
    >

    </Tabs>;


}
const WrapTabItem = (comp) => {
    return <div style={{
        height: 'calc(100vh - 280px)',
        overflow: 'auto',
        padding: '16px'
    }}>
        {comp}
    </div>;
};
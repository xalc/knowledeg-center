import { Tabs } from "antd"
export default function AboutLayout({ children }) {
    return <>
        <Tabs
            defaultActiveKey="1"
            size='large'
            centered
            items={new Array(2).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: `Content of Tab Pane ${id}`,
                };
            })}
        >

        </Tabs>{children}</>
}
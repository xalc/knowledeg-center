
import { getDBReadingTimes } from "@/libs/db-utils";
import ReadingHeapmap from "@/components/wereader/heapmap";
import ReadingLineChart from "@/components/wereader/linechart";
import { Row, Col, Divider } from "antd";

export default async function SumaryPage() {

    const readingTimes = await getDBReadingTimes().catch(err => {
        console.log(err);
        // TODO error handler
    });



    return <>
        <h2>Summary page</h2>
        <Row gutter={16}>
            <Col>
                <ReadingHeapmap readingRecords={readingTimes}></ReadingHeapmap>
            </Col>
        </Row>
        <Divider orientation="center">Antd charts</Divider>
        <Row gutter={16}>
            <Col>
                <ReadingLineChart readingRecords={readingTimes}></ReadingLineChart>
            </Col>
        </Row>

    </>
}
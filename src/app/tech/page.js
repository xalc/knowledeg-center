import { Flex } from 'antd';
import Link from 'next/link';

export default function TechPageRoot() {
	return (
		<>
			<h1>entry of tech page</h1>
			<Flex vertical>
				<Link href="/tech/list"> list page</Link>
				<Link href="/tech/tensor"> tensor Flow</Link>
			</Flex>
		</>
	);
}

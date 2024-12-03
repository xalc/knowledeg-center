import { Code } from 'bright';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

export function useMDXComponents(components) {
	return {
		...components,
		h1: props => <Title level={1} {...props} />,
		h2: props => <Title level={2} {...props} />,
		h3: props => <Title level={3} {...props} />,
		p: props => <Paragraph {...props} />,
		pre: Code,
	};
}

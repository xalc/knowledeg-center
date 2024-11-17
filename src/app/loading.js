import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const Loading = () => {
	return <Spin indicator={<LoadingOutlined spin />} size="large" />;
};
export default Loading;

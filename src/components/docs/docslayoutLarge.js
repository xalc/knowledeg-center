import { Splitter } from 'antd';
import { createStyles } from 'antd-style';
import Claim from '../claim';
const useStyles = createStyles(({ css }) => {
	return {
		splitter: css`
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			height: 100%;
		`,
		content: css`
			margin: auto;
			width: 70%;
		`,
	};
});
const LargeDoc = ({ children, nav }) => {
	const { styles } = useStyles();
	return (
		<Splitter rootClassName={styles.splitter}>
			<Splitter.Panel min="200" max="500" defaultSize="300">
				{nav}
			</Splitter.Panel>
			<Splitter.Panel >
				<div className={styles.content}>{children} <Claim /></div>
			</Splitter.Panel>
		</Splitter>
	);
};

export default LargeDoc;

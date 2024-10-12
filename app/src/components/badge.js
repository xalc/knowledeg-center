import { createStyles } from 'antd-style';
import { Avatar, Flex, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;
const useStyles = createStyles(({ token, css }) => {
    const withTransition = css`
      transition: all ${token.motionDurationSlow} ${token.motionEaseInOutCirc};
    `;
    return ({
        container: css`
            ${withTransition};

            z-index: 1;
            padding: 24px;
            border-radius: 24px;
            width:300px;
            min-height: 200px;
            background: linear-gradient(
                135deg,
                ${token.colorFillContent},
                ${token.colorFillQuaternary}
            );
            position: relative
            &:hover {
                scale: 1.03;
                box-shadow: inset 0 0 0 1px ${token.colorBorder}, ${token.boxShadowSecondary};
            }`,
        content: css`
       
        `
    }

    );
});
const Badge = ({ badge }) => {

    const { styles } = useStyles();
    const { badge_template, issuer } = badge;

    return <div className={styles.container}>
        <Flex gap='small' align='center' >
            <div>
                <Avatar shape='square' src={badge.image_url} size={64} /></div>
            {/* <img className={styles.image} src={badge.image_url} loading="lazy" /> */}
            <div className={styles.content}>
                <Title level={5}> {badge_template.name} </Title>
                <Text strong> {issuer?.entities[0]?.entity?.name}</Text>
                <Paragraph ellipsis={{
                    expandable: 'collapsible',
                    rows: 4,
                    defaultExpanded: false

                }}>
                    {badge_template?.description}
                </Paragraph>
            </div>
        </Flex>




    </div>
}
export default Badge;
import { createStyles } from 'antd-style';
import { Flex, Typography } from 'antd';
const { Title, Text } = Typography;
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
            width:320px;
            min-height: 240px;
            background: linear-gradient(
                135deg,
                ${token.colorFillContent},
                ${token.colorFillQuaternary}
            );
            position: relative;
            &:hover {
                scale: 1.10;
                box-shadow: inset 0 0 0 1px ${token.colorBorder}, ${token.boxShadowSecondary};
            }`,
        image: css`
            width: 128px;
            height: 128px
        `,
        title: css`
            margin-top:8px  
        `
    }

    );
});
const Badge = ({ badge }) => {
    const { styles } = useStyles();
    const { badge_template, issuer, id } = badge;
    const openExtental = (id) => {
        //https://www.credly.com/badges/0d9886eb-a660-4e41-af85-edb84be24b6d
        const domail = 'https://www.credly.com/badges';
        const url = `${domail}/${id}`;
        window.open(url, '_blank');
    };
    return <Flex gap='small' align='center' justify='space-between' className={styles.container} onClick={() => openExtental(id)}>

        {/* <Avatar shape='square' src={badge.image_url} size={128} /> */}
        <img className={styles.image} src={badge.image_url} loading="lazy" />
        <div className={styles.content}>
            <Title className={styles.title} level={5}> {badge_template.name} </Title>
            <Text strong> {issuer?.entities[0]?.entity?.name}</Text>
            {/* <Paragraph ellipsis={{
                    expandable: 'collapsible',
                    rows: 4,
                    defaultExpanded: false
                }}>
                    {badge_template?.description}
                </Paragraph> */}
        </div>
    </Flex>;

};
export default Badge;
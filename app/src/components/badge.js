import { createStyles } from 'antd-style';
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

            background: linear-gradient(
                135deg,
                ${token.colorFillContent},
                ${token.colorFillQuaternary}
            );
        
            &:hover {
                scale: 1.03;
                box-shadow: inset 0 0 0 1px ${token.colorBorder}, ${token.boxShadowSecondary};
                img {
                    width: 128px;
                        height: 128px;

                };
            }`,
        image: {
            width: '64px',
            height: '64px'
        }
    }

    );
});
const Badge = ({ badge }) => {

    const { styles } = useStyles();
    const { badge_template, evidence } = badge;

    return <div className={styles.container}>

        <img src={badge.image_url} loading="lazy" className={styles.image} />
        {badge_template.name}

    </div>
}
export default Badge;
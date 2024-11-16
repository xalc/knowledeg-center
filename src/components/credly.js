'use client';
import { Avatar, Statistic } from "antd";
import { Typography, Flex, Card } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import CredlySvg from '/public/images/credly/credly.svg';
import { createStyles } from 'antd-style';
import Icon from '@ant-design/icons';
import Image from "next/image";
import Badge from "./badge.js";
import Profile from "./profile.js";
import useNarrowScreen from "../hooks/use-narrow-screen.js";
const useStyles = createStyles(({ token, css }) => ({
    profile: {
        background: token.colorBgContainer,
        minHeight: 280,
        padding: 24,
        borderRadius: token.borderRadiusLG,
    },
    container: {
        margin: token.margin,
    },
    badgeContainer: {
        height: 'calc(100vh - 320px)',
        overflow: 'auto'
    },
    profile: css`
        justify-content: space-between;
        align-items: center;
        margin: ${token.margin}
    `,
    avatar: {
        borderRadius: '50%'
    }
}));

const CredlyPage = ({ content, badges }) => {
    const { styles } = useStyles();
    const mobile = useNarrowScreen();
    return (
        <div className={styles.container}>
            <Flex className={styles.profile}>

                <div>    <Image src={CredlySvg} width={64} alt="Credly Icon" />
                    <p>从<a href='https://info.credly.com/' target='_blank' >Credle</a>获得的技术徽章</p></div>
                <Statistic title="徽章数量" value={badges.length} />
                {!mobile && <Profile content={content} />}
            </Flex>


            <Flex
                className={styles.badgeContainer}
                justify="space-around"
                align='center'
                gap='large'
                wrap>
                {badges.map(badge => {
                    return (<Badge key={badge.id} badge={badge}></Badge>);
                })}
            </Flex>

            {/* <div className={styles.profile} >
                <Typography>
                    <Icon component={() => (<Image src={CredlySvg} alt="Credly Icon" />)} />
                    <Paragraph>
                        Accelerate your organization in the competitive skills-based economy—whether you're issuing digital credentials that add value to learning, or future-proofing your workforce with skills they need.
                    </Paragraph>
                </Typography>
            </div> */}


        </div>

    );
};
export default CredlyPage;
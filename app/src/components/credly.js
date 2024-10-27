'use client'
import { Avatar, theme } from "antd";
import { Typography, Flex, Card } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import CredlySvg from '/public/images/credly/credly.svg'
import { createStyles } from 'antd-style';
import Icon from '@ant-design/icons';
import Image from "next/image";
import Badge from "./badge";
import Profile from "./profile";
const useStyles = createStyles(({ token }) => ({
    profile: {
        background: token.colorBgContainer,
        minHeight: 280,
        padding: 24,
        borderRadius: token.borderRadiusLG,
    },
    container: {
        height: '100%'
    },
    badgeContainer: {
        height: '80%',
        overflow: 'auto'
    },
    avatar: {
        borderRadius: '50%'
    }
}));

const CredlyPage = ({ content, badges }) => {
    const { styles } = useStyles();

    return (
        <div className={styles.container}>
            <Profile content={content} />
            <Flex
                className={styles.badgeContainer}
                justify="space-around"
                gap='middle'
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
}
export default CredlyPage;
'use client'
import { Avatar, theme } from "antd";
import { Typography, Flex, Card } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import CredlySvg from '/public/images/credly/credly.svg'
import { createStyles } from 'antd-style';
import Icon from '@ant-design/icons';
import Image from "next/image";
import Badge from "./badge";
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
            <Flex
                gap='large'
                justify='center'
            >
                {/* <Icon size={128} component={() => (<Image src={content.photo_url} alt="Credly Icon" />)} /> */}
                {/* <img className={styles.avatar} src={content.photo_url} width='128' height='128' alt='' /> */}
                <Avatar src={content.photo_url} size={128} />
                <Typography>
                    <Title level={2}>{`${content.first_name} ${content.last_name}`}</Title>
                    <Text strong>{content.current_position_name} | </Text>
                    <Text strong>{content.city}</Text>
                    <Paragraph>{content.bio}</Paragraph>
                </Typography>

            </Flex>
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
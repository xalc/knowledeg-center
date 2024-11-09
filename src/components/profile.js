import { Flex, Avatar, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;
export default function Profile({ content }) {
    return (<Flex
        gap='large'
        justify='center'
    >
        {/* <Icon size={128} component={() => (<Image src={content.photo_url} alt="Credly Icon" />)} /> */}
        {/* <img className={styles.avatar} src={content.photo_url} width='128' height='128' alt='' /> */}
        {/* <Avatar src={content.photo_url} size={128} /> */}
        <Typography>
            {/* <Title level={2}>{`${content.first_name} ${content.last_name}`}</Title> */}
            <Text strong>{content.current_position_name} | </Text>
            <Text strong>{content.city}</Text>
            <Paragraph>{content.bio}</Paragraph>
        </Typography>

    </Flex>);
}
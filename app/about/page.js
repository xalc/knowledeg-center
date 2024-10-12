
import CredlyPage from "../src/components/credly";

const getCredly = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
}

export default async function AboutPage() {

    const userUrl = 'https://www.credly.com/users/xalc';
    const badgesUrl = 'https://www.credly.com/users/xalc/badges';
    const user = await getCredly(userUrl);

    const badges = await getCredly(badgesUrl);


    return <CredlyPage content={user.data} badges={badges.data} />

}
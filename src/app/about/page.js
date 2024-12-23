import CredlyPage from '@/components/credly';
import { Suspense } from 'react';

const getCredly = async url => {
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	};
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}
	return await response.json();
};

export default async function AboutPage() {
	const userName = process.env.CREDLY_USER;
	const userUrl = `https://www.credly.com/users/${userName}`;
	const badgesUrl = `https://www.credly.com/users/${userName}/badges`;

	const user = await getCredly(userUrl);
	const badges = await getCredly(badgesUrl);

	return <Suspense fallback={'loading...'}>
		<CredlyPage content={user.data} badges={badges.data} />
	</Suspense>;


}

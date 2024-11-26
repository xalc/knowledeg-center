import { Image, Alert } from 'antd';

export default async function Page() {
	try {
		const bingURL = 'https://bing.biturl.top/';
		const response = await fetch(bingURL, { next: { revalidate: 3600 } });

		if (response.ok) {
			const image = await response.json();
			return (
				<div style={{ display: 'flex', justifyContent: "center" }}>
					<Image style={{ maxHeight: "960px" }} preview={false} alt={image.title} src={image.url} />
				</div>


			);
		}
	} catch (error) {
		console.error('fetch bing image error' + error);
		return (
			<Alert
				message="Error"
				description={error.message}
				type="error"
				showIcon
			/>
		);
	}
}

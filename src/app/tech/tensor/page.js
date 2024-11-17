'use client';

import TfvisCore from './tfvis-react.js';
// import { BostonHousingDataset, featureDescriptions } from './tfdata';

import styles from './tech.modules.scss';
const TechPage = () => {
	// const bostonData = new BostonHousingDataset();
	// const fetchAllData = async () => {
	//     await bostonData.loadData();
	// }
	return (
		<div className={styles.container}>
			<h2>Tech page</h2>
			<TfvisCore></TfvisCore>

			{/* <Button onClick={fetchAllData}> fetch data</Button> */}
		</div>
	);
};
export default TechPage;

import style from './user.module.scss';
const User = ({ user }) => {
	const { fisrtName, lastName, email, index } = user;
	return (
		<div className={style.container}>
			<div className={style.avatar}>
				{/* <Avator url={avatar} id={index}></Avator> */}
			</div>
			<div className={style.content}>
				<div className={style.name}>
					{fisrtName} {lastName}
				</div>
				<div className={style.email}>{email}</div>
			</div>
			<div> the User index: {index}</div>
		</div>
	);
};
export default User;

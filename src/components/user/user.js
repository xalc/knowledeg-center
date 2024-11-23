import style from './user.module.scss';
import Avatar from '../avatar';
const User = ({ user, showIcon }) => {
	const { fisrtName, lastName, email, index, avatar } = user;
	return (
		<div className={style.container}>
			<div className={style.avatar}>
				{showIcon && <Avatar url={avatar} id={index}></Avatar>}
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

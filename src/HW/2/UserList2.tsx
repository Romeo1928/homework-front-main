import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {

	const onClickLAHandler = () => {
		props.filterUsers()
	}

	const friendsMapped = props.users.myFriends.map((user) => (
			// <ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser />
			<CurrentUser key={user.id}
							 user={user}/>
		))

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={onClickLAHandler}>SHOW ME FRIENDS FROM LA</button>
			<button id={'hw02-filter-button'} onClick={()=> {props.filterUsers()}}>SHOW ME FRIENDS FROM LA</button>

			<ul>
				{friendsMapped}
			{/*	{props.users.myFriends.map((user) => (*/}
			{/*		// <ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser />*/}
			{/*		<CurrentUser key={user.id}*/}
			{/*						 user={user}/>*/}
			{/*	))}*/}
			</ul>
		</div>
	);
};

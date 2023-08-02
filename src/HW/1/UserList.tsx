type AddressType = {
	street: string; // ПОДПРАВЛЯЕМ any
	city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
	id: number
	name: string
	age: number
	address: AddressType
};

type UserListPropsType = {
	users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {

	const userMapped = props.users.map((user) => {
			return (
				<li key={user.id} id={`hw01-user-${user.id}`}>
					<strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
					{user.address.street}, {user.address.city}
				</li>
			);
		})

	return (
		<div id={'hw01-users'}>
			<h2>User List:</h2>
			<ul>
				{userMapped}

				{/*{props.users.map((user) => {*/}
				{/*	return (*/}
				{/*		<li key={user.id} id={`hw01-user-${user.id}`}>*/}
				{/*			<strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>*/}
				{/*			{user.address.street}, {user.address.city}*/}
				{/*		</li>*/}
				{/*	);*/}
				{/*})}*/}
			</ul>
		</div>
	);
};

// React.FC <>----------------------------------------------------
// import React from "react";
//
// type AddressType = {
// 	street: string; // ПОДПРАВЛЯЕМ any
// 	city: string; // ПОДПРАВЛЯЕМ any
// };
//
// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// 	address: AddressType
// };
//
// type UserListPropsType = {
// 	users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
// };
//
// export const UserList: React.FC<UserListPropsType> = ({users}) => {
//
// 	const userMapped = users.map((user) => {
// 		return (
// 			<li key={user.id} id={`hw01-user-${user.id}`}>
// 				<strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
// 				{user.address.street}, {user.address.city}
// 			</li>
// 		);
// 	})
//
// 	return (
// 		<div id={'hw01-users'}>
// 			<h2>User List:</h2>
// 			<ul>
// 				{userMapped}
//
// 				{/*{props.users.map((user) => {*/}
// 				{/*	return (*/}
// 				{/*		<li key={user.id} id={`hw01-user-${user.id}`}>*/}
// 				{/*			<strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>*/}
// 				{/*			{user.address.street}, {user.address.city}*/}
// 				{/*		</li>*/}
// 				{/*	);*/}
// 				{/*})}*/}
// 			</ul>
// 		</div>
// 	);
// };
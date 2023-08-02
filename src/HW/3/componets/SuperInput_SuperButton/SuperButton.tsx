import React from 'react';

type SuperButtonPropsType = {
	id: string
	name: string
	callBack: () => void
}

export const SuperButton = (props: SuperButtonPropsType) => {

	const onClickHandler = () => {
		props.callBack()
	}

	return (
		<button id={props.id} onClick={onClickHandler}>{props.name}</button>
	);
};


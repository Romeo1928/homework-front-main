import React, {ChangeEvent} from 'react';

type SuperInputProps = {
	id: string
	type: string
	setCurrentText: (currentText: string) => void
	currentText: string
}

export const SuperInput = (props: SuperInputProps) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value);
	};

	return (
		<input id={props.id}
				 type={props.type}
				 value={props.currentText}
				 onChange={handleChange}/>
	);
};


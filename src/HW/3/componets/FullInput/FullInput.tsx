import React, {ChangeEvent, useState} from 'react';

type FullInputProps = {
	handleSave: (newText: string) => void
}

export const FullInput = (props: FullInputProps) => {

	const [currentText, setCurrentText] = useState<string>('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value);
	};

	const onClickSaveHandler = () => {
		props.handleSave(currentText)
		setCurrentText('')
	}


	return (
		<div>
			<input id={'hw03-input'}
					 type="text"
					 value={currentText}
					 onChange={handleChange}/>
			<button id={'hw03-button'}
					  onClick={onClickSaveHandler}>
				// НЕ ХВАТАТЕТ ФУНКЦИИ Сохранить
			</button>
		</div>
	);
};


import {ChangeEvent, useState} from 'react';

export const HW3 = () => {
	// 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
	// что приложение начнет гореть красным и ругаться 😡
	// 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
	// - прописать типизацию, где необходимо
	// - починить все, что горит красным
	// - дописать функциональность (где указано комментариями)
	// - приложение должно компилироваться и запускаться в браузере


	const [texts, setTexts] = useState<string[]>([
		'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
	]);
	const [currentText, setCurrentText] = useState<string>('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value);
	};

	const handleSave = (newText: string) => {
		// ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
		// А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
		//  const newT = newText
		//  setTexts([newT, ...texts])
		setTexts([...texts, newText])
	};

	const onClickSaveHandler = () => {
		handleSave(currentText)
		setCurrentText('')
	}

	return (
		<div id={'hw03'}>
			{currentText ? (
				<h1 id={'hw03-text'}>{currentText}</h1>
			) : (
				<h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
			)}

			<input id={'hw03-input'}
					 type="text"
					 value={currentText}
					 onChange={handleChange}/>
			<button id={'hw03-button'}
					  onClick={onClickSaveHandler}>// НЕ ХВАТАТЕТ ФУНКЦИИ Сохранить
			</button>

			<h1 style={{marginTop: '50px'}}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

			<ol id={'hw03-tasks'}>
				{texts.map((el, index) => {
					return (
						<li key={index} id={`hw03-task-${index}`}>
							{el}
						</li>
					);
				})}
			</ol>
		</div>
	);
};

// FULLINPUT
// import {ChangeEvent, useState} from 'react';
// import {ButtonHW3} from "./componets/ButtonHW3";
// import {FullInput} from "./componets/FullInput";
//
// export const HW3 = () => {
// 	// 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
// 	// что приложение начнет гореть красным и ругаться 😡
// 	// 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
// 	// - прописать типизацию, где необходимо
// 	// - починить все, что горит красным
// 	// - дописать функциональность (где указано комментариями)
// 	// - приложение должно компилироваться и запускаться в браузере
//
//
//
// 	const [texts, setTexts] = useState<string[]>([
// 		'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
// 	]);
//
//
//
// 	const handleSave = (newText: string) => {
// 		// ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
// 		// А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
// 		//  const newT = newText
// 		//  setTexts([newT, ...texts])
// 		setTexts([...texts, newText])
// 		// setCurrentText('')
// 	};
//
//
//
// 	return (
// 		<div id={'hw03'}>
// 			{texts ? (
// 				<h1 id={'hw03-text'}>ЗДЕСЬ ХОТЕЛОСЬ БЫ УВИДЕТЬ ВВОДИМЫЙ ТЕКСТ</h1>
// 			) : (
// 				<h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
// 			)}
//
// 			<FullInput handleSave = {handleSave}/>
//
// 			<h1 style={{marginTop: '50px'}}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>
//
// 			<ol id={'hw03-tasks'}>
// 				{texts.map((el, index) => {
// 					return (
// 						<li key={index} id={`hw03-task-${index}`}>
// 							{el}
// 						</li>
// 					);
// 				})}
// 			</ol>
// 		</div>
// 	);
// };

// SUPERINPUT SUPERBUTTON
// import {useState} from 'react';
// import {SuperButton} from "./componets/SuperInput_SuperButton/SuperButton";
// import {SuperInput} from "./componets/SuperInput_SuperButton/SuperInput";
//
// export const HW3 = () => {
// 	// 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
// 	// что приложение начнет гореть красным и ругаться 😡
// 	// 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
// 	// - прописать типизацию, где необходимо
// 	// - починить все, что горит красным
// 	// - дописать функциональность (где указано комментариями)
// 	// - приложение должно компилироваться и запускаться в браузере
//
//
// 	const [texts, setTexts] = useState<string[]>([
// 		'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
// 	]);
//
// 	const [currentText, setCurrentText] = useState<string>('');
//
//
// 	const handleSave = (newText: string) => {
// 		// ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
// 		// А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
// 		//  const newT = newText
// 		//  setTexts([newT, ...texts])
// 		setTexts([...texts, newText])
// 	};
//
// 	const onClickSuperSaveHandler = () => {
// 		handleSave(currentText)
// 		setCurrentText('')
// 	}
//
// 	return (
// 		<div id={'hw03'}>
// 			{currentText ? (
// 				<h1 id={'hw03-text'}>ЗДЕСЬ ХОТЕЛОСЬ БЫ УВИДЕТЬ ВВОДИМЫЙ ТЕКСТ</h1>
// 			) : (
// 				<h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
// 			)}
//
// 			<SuperInput id={'hw03-input'}
// 							type="text"
// 							setCurrentText={setCurrentText}
// 							currentText={currentText}
// 			/>
// 			<SuperButton id={'hw03-button'}
// 							 callBack={onClickSuperSaveHandler}
// 							 name={'SuperButton'}
// 			/>
//
// 			<h1 style={{marginTop: '50px'}}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>
//
// 			<ol id={'hw03-tasks'}>
// 				{texts.map((el, index) => {
// 					return (
// 						<li key={index} id={`hw03-task-${index}`}>
// 							{el}
// 						</li>
// 					);
// 				})}
// 			</ol>
// 		</div>
// 	);
// };


// ИСХОДНИК -------------------------------------------------------------------------------------
// import { useState } from 'react';
//
// export const HW3 = () => {
//   // 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
//   // что приложение начнет гореть красным и ругаться 😡
//   // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
//   // - прописать типизацию, где необходимо
//   // - починить все, что горит красным
//   // - дописать функциональность (где указано комментариями)
//   // - приложение должно компилироваться и запускаться в браузере
//
//
//   const [currentText, setCurrentText] = useState('');
//   const [texts, setTexts] = useState<string[]>([
//     'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
//   ]);
//
//   const handleChange = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
//     // setCurrentText(ЧЕГО-ТО НЕ ХВАТАЕТ);
//   };
//
//   const handleSave = () => {
//     // ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
//     // А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
//   };
//
//   return (
//      <div id={'hw03'}>
//        {/*{currentText ? (*/}
//        {/*  <h1 id={'hw03-text'}>ЗДЕСЬ ХОТЕЛОСЬ БЫ УВИДЕТЬ ВВОДИМЫЙ ТЕКСТ</h1>*/}
//        {/*) : (*/}
//        {/*  <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм*/}
//        {/*)}*/}
//
//        {/*<input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />*/}
//
//        {/*<button id={'hw03-button'} onClick={() => {}}> // НЕ ХВАТАТЕТ ФУНКЦИИ*/}
//        {/*  Сохранить*/}
//        {/*</button>*/}
//
//        {/*<h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>*/}
//
//        {/*<ol id={'hw03-tasks'}>*/}
//        {/*  {ОТРИСОВАТЬ МАССИВ.map((el, index) => {*/}
//        {/*    return (*/}
//        {/*      <li key={index} id={`hw03-task-${index}`}>*/}
//        {/*        {el}*/}
//        {/*      </li>*/}
//        {/*    );*/}
//        {/*  })}*/}
//        {/*</ol>*/}
//      </div>
//   );
// };

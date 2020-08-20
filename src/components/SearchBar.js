import React, { useState } from 'react';

const SearchBar = (props) => {
	const [ userInput, setUserInput ] = useState();

	const onEnterPressed = (event) => {
		if (event.key === 'Enter') {
			console.log(event.target.value);
			props.inputHandler(userInput); //set userinput value in app js state
		}
	};
	const onButtonClicked = (event) => {
		props.inputHandler(userInput); //set userinput value in app js state
	};

	const onChangeHandler = (event) => {
		setUserInput(event.target.value);
	};

	return (
		<div className="ui fluid action input">
			<input
				type="text"
				placeholder="Enter the stock symbol here..."
				onChange={onChangeHandler}
				onKeyDown={onEnterPressed}
			/>
			<div className="ui blue button" onClick={onButtonClicked}>
				Search
			</div>
		</div>
	);
};

export default SearchBar;

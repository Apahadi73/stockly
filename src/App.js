import React, { useState } from 'react';
import Stock from './components/Stock';
import './App.css';
import SearchBar from './components/SearchBar';

const App = (props) => {
	const [ companySymbol, setCompanySymbol ] = useState();
	return (
		<div className="ui container">
			<div>
				<SearchBar inputHandler={setCompanySymbol} />
				<Stock companySymbol={companySymbol} />
			</div>
		</div>
	);
};

export default App;

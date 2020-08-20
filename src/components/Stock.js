import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import './Stock.css';
// receives props from the app.js and fetches stocks data from api
const Stock = ({ companySymbol }) => {
	const [ stockCharXValues, setStockXValues ] = useState();
	const [ stockOpeningValues, setStockOpeningValues ] = useState();
	const [ stockClosingValues, setStockClosingValues ] = useState();

	// fetch stock data when the stock components mounts onto the screen
	useEffect(
		() => {
			const fetchStock = async () => {
				let days = [];
				let openingValues = [];
				let closingValues = [];
				// api url that returns last 100 days stock history of a product
				let apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${companySymbol}&outputsize=compact&apikey=${process
					.env.REACT_APP_STOCK_API_KEY}`;

				try {
					const response = await fetch(apiUrl);
					const responseData = await response.json();
					const data = responseData['Time Series (Daily)'];
					console.log(data);
					days = Object.keys(data);
					days.forEach((day) => {
						openingValues.push(data[day]['1. open']);
						closingValues.push(data[day]['4. close']);
					});
					//setting states
					setStockXValues(days);
					setStockOpeningValues(openingValues);
					setStockClosingValues(closingValues);
				} catch (err) {
					console.log(err);
				}
			};
			fetchStock();
		},
		[ companySymbol ]
	);
	return (
		<div className="stock-component">
			{stockCharXValues && (
				<div>
					<h2>{`${companySymbol} stock history (in last 100 days) `}</h2>

					<Chart
						daysX={stockCharXValues}
						valuesY={stockOpeningValues}
						companySymbol={companySymbol}
						label="Opening values in last 100 days"
					/>
					<Chart
						daysX={stockCharXValues}
						valuesY={stockClosingValues}
						companySymbol={companySymbol}
						label="Closing values in last 100 days"
					/>
				</div>
			)}
		</div>
	);
};

export default Stock;

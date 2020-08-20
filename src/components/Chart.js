import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import useMediaQuery from 'react-use-media-query-hook';
//props received from stock component
// draws chart
const Chart = ({ daysX, valuesY, companySymbol, label }) => {
	// variables used for making chart responsive
	const isMobile = useMediaQuery('(max-width: 400px)');
	const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)');
	const isDesktop = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
	useEffect(() => {}, [ daysX, valuesY ]);

	const setChartWidth = () => {
		if (isMobile || isTablet) {
			return 330;
		} else if (isDesktop) {
			return 500;
		} else {
			return 800;
		}
	};
	const setChartHeight = () => {
		if (isMobile || isTablet) {
			return 400;
		} else if (isDesktop) {
			return 400;
		} else {
			return 600;
		}
	};
	return (
		<div>
			<Plot
				data={[
					{
						x: daysX,
						y: valuesY,
						type: 'scatter',
						mode: 'lines+markers',
						marker: { color: 'green' }
					}
				]}
				layout={{
					width: setChartWidth(),
					height: setChartHeight(),
					title: label
				}}
			/>
		</div>
	);
};

export default Chart;

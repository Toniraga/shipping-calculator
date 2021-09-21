import { useState } from 'react';
import { httpGetRates } from './api/calculateRates';
import './App.css';
import CalculatorBox from './components/CalculatorBox';
import Header from './components/Header';
import ShipList from './components/ShipList';

function App() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);

	const calculateRates = async (payload) => {
		const {
    shipToValue,
    shipFromZipcode,
    shipToZipcode,
    packageType,
    weight,
    depth,
    width,
    height,
    date
  } = payload;

		const data = {
			box_type: `${packageType}`,
			dimension: { depth: +depth, width: +width, height: +height, unit: 'in' },
			ship_date: `${date}`,
			ship_from: { country: 'USA', postal_code: `${shipFromZipcode}` },
			ship_to: { country: `${shipToValue ? 
				shipToValue.toUpperCase() : 'GBR'
			}`, postal_code: `${shipToZipcode}` },
			slug: 'usps-discounted',
			weight: { value: +weight, unit: 'lb' },
		};


		setLoading(true)
		try {
			const response = await httpGetRates(data);
			setFetchedData(response)
			setError(false);
			setLoading(false)
		} catch (err) {
			setError(true);
			setLoading(false)
		}
	}

  return (
		<div className="pb-20">
			<Header />
			<div className="adjust-font mt-10 flex flex-col md:flex-row w-11/12 md:w-10/12 mx-auto justify-between">
				<CalculatorBox onSubmit={calculateRates} loading={loading} />
				<ShipList loading={loading} fetchedData={fetchedData} error={error} />
			</div>
		</div>
	);
}

export default App;

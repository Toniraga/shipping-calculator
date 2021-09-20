import { useEffect } from 'react';
import { getRates } from './api/calculateRates';
import './App.css';
import CalculatorBox from './components/CalculatorBox';
import Header from './components/Header';
import ShipList from './components/ShipList';

function App() {

	useEffect(() => {
		getRates();
	}, [])

  return (
		<div className="pb-20">
			<Header />
			<div className="adjust-font mt-10 flex flex-col md:flex-row w-11/12 md:w-10/12 mx-auto justify-between">
				<CalculatorBox />
				<ShipList />
			</div>
		</div>
	);
}

export default App;

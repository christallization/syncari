import React from 'react';
import './index.css';
import GroceryList from './components/GroceryList'

const App = () => {
	const groceries = [
		{
			id: "6abce9cc-c638-4e8a-b683-03e6b01fbac9",
			name: "ice cream",
			count: 1,
			bought: false,
		}, {
			id: "3833fadc-82f5-4809-90d0-cd8feac67369",
			name: "frozen pizza",
			count: 1,
			bought: false,
		}, {
			id: "943d17ea-b1f3-4c9d-81a5-7f528d4c9b5f",
			name: "bread",
			count: 2,
			bought: false,
		}
	];

	return (
		<GroceryList groceryItems={groceries} />
	);
};

export default App;

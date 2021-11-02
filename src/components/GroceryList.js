import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

function GroceryList({
    groceryItems,
    onChange
}) {
    const [items, setItems] = useState(groceryItems);

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);

    const handleGeneralOnChange = (updatedItems) => {
        if (typeof onChange === 'function') {
            onChange({
                target: {
                    id: items.id,
                    value: updatedItems
                }
            })
        }
    }

	const handleAddButtonClick = () => {
		const newItem = {
			name: inputValue,
			count: 1,
			bought: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
        handleGeneralOnChange(newItems);
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].count++;

		setItems(newItems);
		calculateTotal();
        handleGeneralOnChange(newItems);
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].count--;

		setItems(newItems);
		calculateTotal();
        handleGeneralOnChange(newItems);
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].bought = !newItems[index].bought;

		setItems(newItems);
        handleGeneralOnChange(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.count;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.bought ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.name}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.name}</span>
									</>
								)}
							</div>
							<div className='count'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.count} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	)
}


export default (GroceryList);

import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		window.dispatchEvent(new CustomEvent('onCounterMount'));

		return () => {
			window.dispatchEvent(new CustomEvent('onCounterUnmount'));
		};
	}, []);

	useEffect(() => {
		window.dispatchEvent(new CustomEvent('onCounterUpdate', { detail: count }));
	});

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);

		if (count === 10) {
			setCount(0);
		}

	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};

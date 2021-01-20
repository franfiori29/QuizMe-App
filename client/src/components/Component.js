import React from 'react';
import { View, Text, Button } from 'react-native';
import { decrement, increment } from '../reduxToolkit/cont';
import { useDispatch, useSelector } from 'react-redux';

const Component = () => {
	const counter = useSelector((store) => store.counter);

	const dispatch = useDispatch();

	const onIncrement = () => {
		dispatch(increment());
	};

	const onDecrement = () => {
		dispatch(decrement());
	};

	return (
		<View>
			<Button onPress={onDecrement} title='-' />
			<Text>{counter}</Text>
			<Button onPress={onIncrement} title='+' />
		</View>
	);
};

export default Component;

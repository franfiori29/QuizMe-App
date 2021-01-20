// import React from 'react';

// export function counter(state, action) {
// 	if (typeof state === 'undefined') {
// 		return 0;
// 	}

// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// }

// export var store = Redux.createStore(counter);

import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

export const {
	increment,
	decrement,
} = counterSlice.actions;

export default counterSlice.reducer;

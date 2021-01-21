import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

//~~~Reducers~~~
import counterSlice from './reduxToolkit/cont';

const rootReducer = combineReducers({
	counter: counterSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;

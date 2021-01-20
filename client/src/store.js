import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
// import reducers
import counterSlice from './reduxToolkit/cont';

const rootReducer = combineReducers({
    //combine reducers
    counter: counterSlice
});

const store = configureStore({
	reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept(rootReducer, () => {
		const newRootReducer = require(rootReducer).default;
		store.replaceReducer(newRootReducer);
	});
}

export default store;

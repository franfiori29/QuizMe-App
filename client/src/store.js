import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//~~~Reducers~~~
import globalSlice from '@redux/global';
import userSlice from '@redux/user';

const rootReducer = combineReducers({
	global: globalSlice,
	user: userSlice,
});

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export default store;

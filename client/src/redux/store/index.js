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
import AsyncStorage from '@react-native-async-storage/async-storage';

//~~~Reducers~~~
import globalSlice from '@redux/reducers/global';
import userSlice from '@redux/reducers/user';
import quizSlice from '@redux/reducers/quizzes';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
	global: globalSlice,
	user: userSlice,
	quiz: quizSlice,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['user', 'global'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

const persistor = persistStore(store);

export { store, persistor };

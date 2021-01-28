import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

//~~~Reducers~~~
import globalSlice from '@redux/reducers/global';
import userSlice from '@redux/reducers/user';
import quizSlice from '@redux/reducers/quizzes';
import categorySlice from '@redux/reducers/categories';

const rootReducer = combineReducers({
	global: globalSlice,
	user: userSlice,
	quiz: quizSlice,
	categories: categorySlice,
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
		immutableCheck: false,
	}),
});

const persistor = persistStore(store);

export { store, persistor };

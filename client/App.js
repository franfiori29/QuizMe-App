import React from 'react';
import HomeRoutes from './routes/home_routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useDispatch } from 'react-redux';
import { store, persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					<SafeAreaView style={{ flex: 1 }}>
						<HomeRoutes />
					</SafeAreaView>
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
}

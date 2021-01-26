import React, { useEffect } from 'react';
import HomeRoutes from './routes/home_routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store, persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';

export default function App() {
	// useEffect(() => {
	// 	registerForPushNotification().then((token) => console.log(token));
	// }, []);
	// async function registerForPushNotification() {
	// 	const { status } = await Permissions.getAsync(
	// 		Permissions.NOTIFICATIONS
	// 	);
	// 	if (status != 'granted') {
	// 		const { status } = await Permissions.askAsync(
	// 			Permissions.NOTIFICATIONS
	// 		);
	// 		// finalStatus = status;
	// 	}
	// 	if (status !== 'granted') {
	// 		alert('Failed to get push token for push notification!');
	// 		return;
	// 	}
	// 	token = (await Notifications.getExpoPushTokenAsync()).data;
	// 	return token;
	// }

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

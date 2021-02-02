import React, { useEffect } from 'react';
import HomeRoutes from './routes/home_routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from '@redux/store';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import {
	useFonts,
	Nunito_200ExtraLight,
	Nunito_200ExtraLight_Italic,
	Nunito_300Light,
	Nunito_300Light_Italic,
	Nunito_400Regular,
	Nunito_400Regular_Italic,
	Nunito_600SemiBold,
	Nunito_600SemiBold_Italic,
	Nunito_700Bold,
	Nunito_700Bold_Italic,
	Nunito_800ExtraBold,
	Nunito_800ExtraBold_Italic,
	Nunito_900Black,
	Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
// import AppLoading from 'expo-app-loading';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
	let [fontsLoaded] = useFonts({
		Nunito_200ExtraLight,
		Nunito_200ExtraLight_Italic,
		Nunito_300Light,
		Nunito_300Light_Italic,
		Nunito_400Regular,
		Nunito_400Regular_Italic,
		Nunito_600SemiBold,
		Nunito_600SemiBold_Italic,
		Nunito_700Bold,
		Nunito_700Bold_Italic,
		Nunito_800ExtraBold,
		Nunito_800ExtraBold_Italic,
		Nunito_900Black,
		Nunito_900Black_Italic,
	});

	useEffect(() => {
		registerForPushNotification()
			.then((token) => console.log(token))
			.catch((err) => console.log(err));
	}, []);

	const registerForPushNotification = async () => {
		const { status } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS,
		);
		if (status != 'granted') {
			const { status } = await Permissions.askAsync(
				Permissions.NOTIFICATIONS,
			);
		}
		if (status != 'granted') {
			alert('fail to get the push token');
			return;
		}

		token = (await Notifications.getExpoPushTokenAsync()).data;
		return token;
	};

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

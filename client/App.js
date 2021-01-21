import React, { useEffect } from 'react';
import { request, gql } from 'graphql-request';
import HomeRoutes from './routes/home_routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';

const query = gql`
	{
		getUsers {
			email
		}
	}
`;

export default function App() {
	/* useEffect(() => {
		request('http://localhost:4000/', query).then(console.log);
	}, []);
 */
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<HomeRoutes />
				</SafeAreaView>
			</SafeAreaProvider>
		</Provider>
	);
}

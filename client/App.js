import React, { useEffect } from 'react';
import { request, gql } from 'graphql-request';
import HomeRoutes from './routes/home_routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const query = gql`
	{
		getUsers {
			email
		}
	}
`;

export default function App() {
	useEffect(() => {
		request('http://localhost:4000/', query).then(console.log);
	}, []);
	return (
		<SafeAreaProvider>
			<HomeRoutes />
		</SafeAreaProvider>
	);
}

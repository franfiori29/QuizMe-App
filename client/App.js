import React, { useEffect } from 'react';
import { View } from 'react-native';
import { request, gql } from 'graphql-request';
import { Provider } from 'react-redux';
import store from "./src/store";
import Quiz from './src/components/quiz';

const query = gql`
	{
		getUsers {
			username
		}
	}
`;

export default function App() {
	useEffect(() => {
		request('http://localhost:4000/', query).then(console.log);
	}, []);

	return (
		<Provider store={store}>
			<Quiz />
		</Provider>
	);
}

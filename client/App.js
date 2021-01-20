import React, { useEffect } from 'react';
import { View } from 'react-native';
import { request, gql } from 'graphql-request';
import Quiz from './src/components/quiz';

const query = gql`
	{
		getUsers {
			username
		}
	}
`;

export default function App() {
	// useEffect(() => {
	// 	request('http://localhost:4000/', query).then((data) =>
	// 		console.log(data)
	// 	);
	// }, []);
	return <Quiz />;
}

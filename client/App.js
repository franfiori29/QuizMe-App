import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from '@components/Component';
import { request, gql } from 'graphql-request';
import { Provider } from 'react-redux';
import store from "./src/store";

const query = gql`
	{
		getUsers {
			username
		}
	}
`;

export default function App() {
	useEffect(() => {
		request('http://localhost:4000/', query).then((data) =>
			console.log(data)
		);
	}, []);
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<Component />
				<StatusBar style='auto' />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from '@components/Component';
import { request, gql } from 'graphql-request';

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
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<Component />
			<StatusBar style="auto" />
		</View>
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

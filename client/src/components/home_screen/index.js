import React from 'react';
import { View, Text, Button } from 'react-native';
import { changeLanguage } from '@redux/global';
import { logout } from '@redux/user';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
	const { language } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate('Login');
	};

	return (
		<View>
			<Text>Home Screen</Text>
			<Button
				title="go to quiz"
				onPress={() => navigation.navigate('QuizIndex')}
			/>
			<Button
				title="Change Language"
				onPress={() => dispatch(changeLanguage())}
			/>
			<Text>
				{user.firstName} {user.lastName}
			</Text>
			<Button title="Logout" onPress={handleLogout} />

			<Text>{language}</Text>
		</View>
	);
};

export default HomeScreen;

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import NavBar from '../../utils/NavBar';
import UserCards from '../../utils/UserCards';
import strings from '../strings';

const AdminUsers = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const s = strings[language];
	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string={s.adminPanel}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
				/>
				<UserCards />
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

export default AdminUsers;

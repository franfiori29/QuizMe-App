import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import NavBar from '../../utils/NavBar';
import UserCards from '../../utils/UserCards';
import strings from '../strings';
import Spinner from 'react-native-loading-spinner-overlay';

const AdminUsers = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { loadingUsers } = useSelector((state) => state.user);
	const s = strings[language];
	return (
		<ThemeProvider theme={theme}>
			<Spinner
				visible={loadingUsers}
				textContent={s.loading}
				color={theme.white}
				textStyle={{
					color: theme.white,
				}}
			/>
			<Screen>
				<NavBar
					string={s.adminPanel}
					nav1={() => navigation.navigate('UserMenu')}
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

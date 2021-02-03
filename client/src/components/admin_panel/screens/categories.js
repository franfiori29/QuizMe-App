import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import Spinner from 'react-native-loading-spinner-overlay';

import NavBar from '../../utils/NavBar';
import CategoryCards from '../../utils/CategoryCards';
import strings from '../strings';

const AdminCategories = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { loading } = useSelector((state) => state.categories);

	const s = strings[language];
	return (
		<ThemeProvider theme={theme}>
			<Spinner
				visible={loading}
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
				<Button
					bgColor={theme.primary}
					onPress={() => {
						navigation.navigate('AddCategory');
					}}
				>
					<ButtonText>{s.addCategory}</ButtonText>
				</Button>
				<CategoryCards />
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const Button = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	background-color: ${({ bgColor }) => bgColor};
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
`;

const ButtonText = styled.Text`
	text-transform: uppercase;
	font-family: 'Nunito_600SemiBold';
	color: ${(props) => props.theme.white};
`;

export default AdminCategories;

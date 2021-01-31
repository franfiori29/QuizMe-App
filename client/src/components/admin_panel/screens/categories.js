import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import NavBar from '../../utils/NavBar';
import CategoryCards from '../../utils/CategoryCards';
import strings from '../strings';

const AdminCategories = ({ navigation }) => {
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
				<CategoryCards />
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

export default AdminCategories;

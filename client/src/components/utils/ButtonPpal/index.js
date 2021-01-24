import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

const ButtonPpal = ({ navigation, string, nav }) => {
	const { theme } = useSelector((state) => state.global);
	const handleNav = () => {
		navigation.navigate(nav);
	};
	return (
		<ThemeProvider theme={theme}>
			<ButtonPpalCont onPress={handleNav}>
				<ButtonPpalText>{string}</ButtonPpalText>
			</ButtonPpalCont>
		</ThemeProvider>
	);
};

const ButtonPpalCont = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	background-color: ${(props) => props.theme.primary};
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
`;
const ButtonPpalText = styled.Text`
	text-transform: uppercase;
	font-weight: bold;
	color: ${(props) => props.theme.text};
`;

export default ButtonPpal;

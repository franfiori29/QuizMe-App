import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

const ButtonPpal = ({ handleNav, string, onSubmit }) => {
	const { theme } = useSelector((state) => state.global);
	return (
		<ThemeProvider theme={theme}>
			<ButtonPpalCont onPress={onSubmit || handleNav}>
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
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.white};
`;

export default ButtonPpal;

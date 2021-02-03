import React from 'react';
import { Share } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import strings from './strings';

export default function SocialMedia({ shareOptions, styles = {} }) {
	const { language, theme } = useSelector((state) => state.global);
	const s = strings[language];
	const shareSocialMedia = async () => {
		try {
			await Share.share(shareOptions);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<ShareButton onPress={shareSocialMedia}>
				<ButtonText
					adjustsFontSizeToFit={true}
					style={{
						color: theme.primary,
					}}
				>
					{s.button}
				</ButtonText>
			</ShareButton>
		</ThemeProvider>
	);
}

const ShareButton = styled.TouchableOpacity`
	align-self: center;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
	width: 100%;
	background-color: ${(props) => props.theme.bg};
	border: 2px solid ${(props) => props.theme.primary};
`;

const ButtonText = styled.Text`
	text-transform: uppercase;
	font-family: 'Nunito_800ExtraBold';
`;

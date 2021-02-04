import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';
import ButtonPpal from '../utils/ButtonPpal';
import styled, { ThemeProvider } from 'styled-components/native';
import strings from './strings';
import NavBar from '@components/utils/NavBar';
import StarCorner from '@assets/img/star_corner.png';
import StarFilled from '@assets/img/star_filled.png';

const RateUs = ({ navigation }) => {
	const { language, theme } = useSelector((state) => state.global);
	const s = strings[language];
	const [defaultRating, setDefaultRating] = useState(3);
	const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

	const CustomRatingBar = () => {
		return (
			<Rating>
				{maxRating.map((item, key) => {
					return (
						<TouchableOpacity
							activeOpacity={0.7}
							key={item}
							onPress={() => setDefaultRating(item)}
						>
							<Star
								source={
									item <= defaultRating
										? StarFilled
										: StarCorner
								}
							/>
						</TouchableOpacity>
					);
				})}
			</Rating>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<View>
					<Title>{s.title}</Title>
					<Description>{s.description}</Description>
					<CustomRatingBar />
					<Title>
						{defaultRating} / {Math.max.apply(null, maxRating)}
					</Title>
				</View>
				<ButtonStyle
					string={s.button}
					onPress={() => alert(defaultRating)}
				></ButtonStyle>
			</Container>
		</ThemeProvider>
	);
};

export default RateUs;

const Container = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
	padding: 10px;
	text-align: center;
	justify-content: space-between;
`;
const Title = styled.Text`
	text-align: center;
	font-size: 23px;
	color: ${(props) => props.theme.text};
	margin-top: 15px;
	margin-bottom: 15px;
	font-family: 'Nunito_400Regular';
`;

const Description = styled.Text`
	text-align: center;
	font-size: 16px;
	color: ${(props) => props.theme.text};
	margin-top: 15px;
	font-family: 'Nunito_400Regular';
`;
const ButtonStyle = styled(ButtonPpal)`
	justify-content: center;
	flex-direction: row;
	margin-top: 50px;
	padding: 1px;
	background-color: ${(props) => props.theme.primary};
`;
const Rating = styled.View`
	justify-content: center;
	flex-direction: row;
	margin-top: 30px;
`;
const Star = styled.Image`
	width: 50px;
	height: 50px;
`;

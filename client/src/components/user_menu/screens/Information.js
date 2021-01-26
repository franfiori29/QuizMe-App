import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

//==> Components
import NavBar from '@components/utils/NavBar';
import Separator from '@components/utils/Separator';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

//Assets
import informationS from './strings/informationS';

const Information = ({ navigation }) => {
	const { language, theme } = useSelector((state) => state.global);
	const s = informationS[language];

	const coders = [
		{
			name: 'Franco',
			lastname: 'Ortiz',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/franco-david-ortiz/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Ignacio',
			lastname: 'contreras',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/ignacio-contreras/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Martin',
			lastname: 'Spagnoulo',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/franco-david-ortiz/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Franco',
			lastname: 'Fiori',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/franco-fiori-fullstack/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Emiliano',
			lastname: 'Alfonso',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/emiliano-alfonso/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Ailin',
			lastname: 'Nakaganeku',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/franco-david-ortiz/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Santiago',
			lastname: 'Calisaya',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/franco-david-ortiz/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Bruno',
			lastname: 'Gallardo',
			image: { uri: 'https://picsum.photos/100/100' },
			linked: 'https://www.linkedin.com/in/franco-david-ortiz/',
			git: 'https://github.com/Pakvothe',
		},
	];

	coders.sort(() => Math.random() - 0.5);

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<Title>{s.title}</Title>
				<Intro>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged.
				</Intro>
				<Separator />
				<Title>{s.about}</Title>
				<About>
					{coders.map((prog) => (
						<Coder key={prog.lastname}>
							<Name>{prog.name} </Name>
							<LastName>{prog.lastname}</LastName>
							<Picture source={prog.image} />
							<SocialContainer>
								<Icon
									color={theme.text}
									name='ios-logo-linkedin'
									size={40}
									style={{ justifyContent: 'center' }}
								/>
								<Icon
									color={theme.text}
									name='ios-logo-github'
									size={40}
									style={{ justifyContent: 'center' }}
								/>
							</SocialContainer>
						</Coder>
					))}
				</About>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	width: 100%;
	align-self: center;
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const Title = styled.Text`
	font-size: 28px;
	color: ${(props) => props.theme.text};
	margin: 20px auto;
`;
const Intro = styled.Text`
	width: 95%;
	align-self: center;
	text-align: center;
	font-size: 18px;
	color: ${(props) => props.theme.text};
	margin-bottom: 20px;
`;

const About = styled.View`
	width: 95%;
	align-self: center;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
`;
const Coder = styled.View`
	width: 48%;
	height: 242px;
	align-self: center;
	border: 3px solid ${(props) => props.theme.primary};
	border-radius: 5px;
	margin-bottom: 20px;
	padding: 10px;
`;

const Name = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin: 0 auto;
`;
const LastName = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin: 0 auto;
`;
const Picture = styled.Image`
	align-self: center;
	border-radius: 5px;
	width: 100px;
	height: 100px;
	margin-top: 10px;
`;

const SocialContainer = styled.View`
	width: 100%;
	align-self: center;
	justify-content: space-around;
	flex-direction: row;
	padding: 10px 5px;
`;

export default Information;

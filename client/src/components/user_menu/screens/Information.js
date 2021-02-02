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

				<Title style={{ marginBottom: 10 }}>{s.about}</Title>
				<About>
					{coders.map((prog) => (
						<Coder key={prog.lastname}>
							<View
								style={{
									width: 100,
									height: 100,
									borderRadius: 50,
									overflow: 'hidden',
									marginRight: 20,
								}}
							>
								<Picture source={prog.image} />
							</View>
							<View>
								<Name>
									{prog.name} {prog.lastname}
								</Name>
								<SocialContainer>
									<Icon
										color={theme.text}
										name='ios-logo-linkedin'
										size={40}
										style={{
											justifyContent: 'center',
											marginRight: 10,
										}}
									/>
									<Icon
										color={theme.text}
										name='ios-logo-github'
										size={40}
										style={{ justifyContent: 'center' }}
									/>
								</SocialContainer>
							</View>
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
	margin: 20px auto 5px;
	font-family: 'Nunito_600SemiBold';
`;
const Intro = styled.Text`
	width: 95%;
	align-self: center;
	text-align: center;
	font-size: 15px;
	color: ${(props) => props.theme.text};
	margin-bottom: 20px;
	font-family: 'Nunito_400Regular';
	line-height: 22px;
`;

const About = styled.View`
	width: 95%;
	align-self: center;
	flex-direction: column;
`;
const Coder = styled.View`
	margin-bottom: 30px;
	overflow: hidden;
	flex-direction: row;
	align-items: center;
`;

const Name = styled.Text`
	font-size: 18px;
	font-family: 'Nunito_600SemiBold';
	color: ${(props) => props.theme.text};
	text-align: center;
	margin-bottom: 10px;
`;

const Picture = styled.Image`
	width: 100%;
	height: 100%;
`;

const SocialContainer = styled.View`
	flex-direction: row;
`;

export default Information;

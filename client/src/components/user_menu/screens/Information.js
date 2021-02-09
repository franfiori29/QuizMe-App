import React from 'react';
import { View, Linking } from 'react-native';
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
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4E03AQGhWnGoD7uBBQ/profile-displayphoto-shrink_800_800/0/1611889726552?e=1618444800&v=beta&t=ZDOrpLH7YP-dB_2F1V9OZwT2F5d2Eh5FL8kxxOtcibY',
			},
			linked: 'https://www.linkedin.com/in/franco-david-ortiz/',
			git: 'https://github.com/Pakvothe',
		},
		{
			name: 'Ignacio',
			lastname: 'contreras',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4E03AQGk6KO2psK7Jg/profile-displayphoto-shrink_800_800/0/1610984126218?e=1618444800&v=beta&t=Evb2CWU7tywMIlGkmNnLuFpSzx9F0zXa8ram8aqsHP0',
			},
			linked: 'https://www.linkedin.com/in/ignacio-contreras/',
			git: 'https://github.com/nc-devw',
		},
		{
			name: 'Martin',
			lastname: 'Spagnoulo',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4E03AQFDjnBNbUZlgw/profile-displayphoto-shrink_800_800/0/1610983501509?e=1618444800&v=beta&t=Gl5XVxY-s_CKralMN9lbUHVEwaR6An8F4FKNvA8wlYQ',
			},
			linked: 'https://www.linkedin.com/in/martin-sanchez-6973121b7/',
			git: 'https://github.com/tinsanchez00',
		},
		{
			name: 'Franco',
			lastname: 'Fiori',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4E03AQFj5lElRrDpXA/profile-displayphoto-shrink_800_800/0/1610550870146?e=1618444800&v=beta&t=7nLOJdn2WkVPBQO86XcdC8pPcgjCKMNaWdGHWo-RMdM',
			},
			linked: 'https://www.linkedin.com/in/franco-fiori-fullstack/',
			git: 'https://github.com/franfiori29',
		},
		{
			name: 'Emiliano',
			lastname: 'Alfonso',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4E03AQGAdal2Edxw_w/profile-displayphoto-shrink_800_800/0/1606584006040?e=1618444800&v=beta&t=tihDdn2vL7mOoPHkp8HhzAoZxTlmDLIZXtf-2l7NVE4',
			},
			linked: 'https://www.linkedin.com/in/emiliano-alfonso/',
			git: 'https://github.com/Aglowkeys',
		},
		{
			name: 'Ailin',
			lastname: 'Nakaganeku',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4D03AQHX-UEMijZCmw/profile-displayphoto-shrink_800_800/0/1604450256656?e=1618444800&v=beta&t=6VCD3iMbtQfJsD_fRPR2BgxR2XO8VhAlfbkBaFa07yw',
			},
			linked: 'https://www.linkedin.com/in/ailinak/',
			git: 'https://github.com/ailinnakaganeku',
		},
		{
			name: 'Santiago',
			lastname: 'Calisaya',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4D03AQHD4nSM6_5nbQ/profile-displayphoto-shrink_800_800/0/1542035446264?e=1618444800&v=beta&t=G4P5fJI0FP4OTtOBb7AZ1zFr3BIxnRMoNYbf3afMcJk',
			},
			linked: 'https://www.linkedin.com/in/ttiago7/',
			git: 'https://github.com/ttiago7',
		},
		{
			name: 'Bruno',
			lastname: 'Gallardo',
			image: {
				uri:
					'https://media-exp1.licdn.com/dms/image/C4E03AQHABYBjq4PD8g/profile-displayphoto-shrink_800_800/0/1609805752074?e=1618444800&v=beta&t=YJImKFKmKz-wHQbRqCsSbQ1i2J_PBBKzOTDYp6Cw1mE',
			},
			linked: 'https://www.linkedin.com/in/bruno-gallardo-7bab23120/',
			git: 'https://github.com/gallardobruno',
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
				<Intro>{s.intro}</Intro>

				<Title style={{ marginBottom: 10 }}>{s.about}</Title>
				<About>
					{coders.map((prog, i) => (
						<View key={i}>
							<Separator />
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
								<View style={{ flex: 1 }}>
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
											onPress={() =>
												Linking.openURL(prog.linked)
											}
										/>
										<Icon
											color={theme.text}
											name='ios-logo-github'
											size={40}
											style={{ justifyContent: 'center' }}
											onPress={() =>
												Linking.openURL(prog.git)
											}
										/>
									</SocialContainer>
								</View>
							</Coder>
						</View>
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
	width: 95%;
	margin: 10px auto;
	overflow: hidden;
	flex-direction: row;
	align-items: center;
	justify-content: center;
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
	align-self: center;
	flex-direction: row;
`;

export default Information;

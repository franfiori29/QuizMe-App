import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

//Components
import NavBar from '@components/utils/NavBar';
import Achivements from '../profile/Achivements';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

//Assets
import strings from './strings';

const PublicProfile = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { info } = useSelector((state) => state.user);

	const { info: user } = useSelector((state) => state.user);

	const s = strings[language];

	return (
		<ThemeProvider theme={theme}>
			<ScrollView style={{ flex: 1, backgroundColor: theme.bg }}>
				<NavBar
					string={user.firstName + user.lastName + s.title}
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('Home')}
					icon1='ios-arrow-back'
					icon2='ios-home-outline'
				/>
				<UserContainer>
					<View>
						<UserImg
							source={{
								uri: info.profilePic
									? info.profilePic
									: 'https://picsum.photos/150/150',
							}}
						/>
					</View>
					<UserInfo>
						<View>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<UserName>
									{user.firstName} {user.lastName}
									{user.validated && (
										<Icon
											name='checkmark-circle'
											size={20}
											style={{
												color: '#1271e2',
												zIndex: 20,
												marginLeft: 5,
											}}
										/>
									)}
									{user.premium && (
										<Icon
											color={'rgb(250,210,1)'}
											name='ios-star'
											size={20}
											style={{
												zIndex: 20,
												marginLeft: 5,
											}}
										/>
									)}
								</UserName>
							</View>
						</View>
						<View>
							<Text
								style={{
									color: theme.text,
									fontFamily: 'Nunito_400Regular_Italic',
									marginBottom: 5,
								}}
							>
								Argentina
							</Text>
							<UserText style={{ marginBottom: 5 }}>
								{s.follow} 250
							</UserText>
							<UserText>{s.followers} 40 </UserText>
						</View>
					</UserInfo>
				</UserContainer>
				<InfoBoxWrapper>
					<InfoBox
						style={{
							borderRightColor: '#dddddd',
							borderRightWidth: 1,
						}}
					>
						<Text
							style={{
								color: theme.primary,
								marginBottom: 5,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							9
						</Text>
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							{s.life}
						</Text>
					</InfoBox>
					<InfoBox>
						<Text
							style={{
								color: theme.primary,
								marginBottom: 5,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							12
						</Text>
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							{s.games}
						</Text>
					</InfoBox>
				</InfoBoxWrapper>
				<StatsScreen>
					<StatsTitle>{s.stats}</StatsTitle>
					<View style={{ width: '100%' }}>
						<StatCard>
							<View style={{ width: '50%' }}>
								<Icon
									color={theme.text}
									name='md-book-sharp'
									size={50}
									style={{ justifyContent: 'center' }}
								/>
							</View>
							<StatInfo>
								<StatText
									style={{
										textTransform: 'uppercase',
										fontWeight: 'bold',
									}}
								>
									{s.points.toUpperCase()}
								</StatText>
								<StatText>875412</StatText>
							</StatInfo>
						</StatCard>
						<StatCard>
							<View style={{ width: '50%' }}>
								<Icon2
									color={theme.text}
									name='crown'
									size={50}
								/>
							</View>
							<StatInfo>
								<StatText
									style={{
										textTransform: 'uppercase',
										fontWeight: 'bold',
									}}
								>
									Division
								</StatText>
								<StatText>Bronze</StatText>
							</StatInfo>
						</StatCard>
					</View>
					<StatsTitle>{s.achv}</StatsTitle>
					<Achivements />
				</StatsScreen>
			</ScrollView>
		</ThemeProvider>
	);
};

export default PublicProfile;

const UserContainer = styled.View`
	height: 200px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	flex-direction: row-reverse;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	padding: 20px;
	width: 95%;
	align-self: center;
`;

const UserImg = styled.Image`
	z-index: 3;
	height: 120px;
	width: 120px;
	border-radius: 100px;
`;

const UserInfo = styled.View`
	height: 100%;
	align-items: flex-start;
	width: 60%;
	justify-content: space-around;
`;

const UserName = styled.Text`
	font-size: 22px;
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.primary};
`;

const UserText = styled.Text`
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_400Regular';
`;

const InfoBoxWrapper = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	width: 95%;
	align-self: center;
	height: 100px;
	flex-direction: row;
`;
const InfoBox = styled.TouchableOpacity`
	width: 50%;
	align-items: center;
	justify-content: center;
`;

const StatsScreen = styled.View`
	padding: 15px;
`;
const StatsTitle = styled.Text`
	color: ${(props) => props.theme.text};
	font-size: 22px;
	font-family: 'Nunito_600SemiBold';
	text-align: center;
`;
const StatCard = styled.View`
	width: 100%;
	height: 100px;
	border: 1px solid ${(props) => props.theme.primary};
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	padding: 0 40px;
	margin: 15px;
	border-radius: 10px;
	align-self: center;
`;
const StatInfo = styled.View`
	height: 100%;
	padding: 15px;
	width: 50%;
	justify-content: space-around;
`;

const StatText = styled.Text`
	color: ${(props) => props.theme.text};
	text-align: center;
	font-family: 'Nunito_600SemiBold';
`;

const AccTypeButton = styled.TouchableOpacity`
	width: 100%;
	height: 35px;
	margin-top: 5px;
	align-items: center;
	justify-content: center;
	border: 2px solid ${(props) => props.theme.primary};
	border-radius: 5px;
`;

import React, { useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById, followUser, unfollowUser } from '@redux/reducers/user';

//Components
import NavBar from '@components/utils/NavBar';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';

//Assets
import logo from '@assets/logo.png';
import strings from './strings';
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';

const PublicProfile = ({ navigation, route: { params } }) => {
	const Bronze = 'rgb(176,141,87)';
	const Silver = 'rgb(190,194,203)';
	const Gold = 'rgb(212,175,55)';
	const { theme, language } = useSelector((state) => state.global);
	const { otherUser, following, info: user } = useSelector(
		(state) => state.user
	);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		dispatch(getUserById(params.userId)).then((_) => setLoading(false));
	}, [params.userId]);

	const selectDivision = () => {
		if (otherUser.totalScore < 10000) {
			return 'Bronze';
		} else if (otherUser.totalScore < 25000) {
			return 'Silver';
		} else if (otherUser.totalScore < 50000) {
			return 'Gold';
		} else {
			return 'QuizMaster';
		}
	};

	const s = strings[language];

	if (loading || !otherUser || !Object.keys(otherUser).length)
		return (
			<View
				style={{
					backgroundColor: 'white',
					flex: 1,
					justifyContent: 'center',
				}}
			>
				<ActivityIndicator size='large' color={theme.primary} />
			</View>
		);

	return (
		<ThemeProvider theme={theme}>
			<ScrollView style={{ flex: 1, backgroundColor: theme.bg }}>
				<NavBar
					string={
						otherUser.firstName +
						' ' +
						otherUser.lastName +
						' ' +
						s.title
					}
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('Home')}
					icon1='ios-arrow-back'
					icon2='ios-home-outline'
				/>
				<UserContainer>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<UserImg
							source={
								otherUser.profilePic
									? {
											uri: otherUser.profilePic,
									  }
									: logo
							}
						/>
						{params.userId !== user._id &&
							(following.some(
								(followingUser) =>
									followingUser._id == params.userId
							) ? (
								<TouchableOpacity
									style={{
										width: '100%',
										marginTop: 10,
										borderWidth: 2,
										borderColor: theme.wrong,
										borderRadius: 5,
										padding: 1,
									}}
									onPress={async () => {
										await dispatch(
											unfollowUser(params.userId)
										);
										dispatch(getUserById(params.userId));
									}}
								>
									<Text
										style={{
											textAlign: 'center',
											textTransform: 'uppercase',
											fontFamily: 'Nunito_800ExtraBold',
											color: theme.wrong,
										}}
									>
										{s.unfollow}
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										width: '100%',
										marginTop: 10,
										borderWidth: 2,
										borderColor: theme.primary,
										borderRadius: 5,
										padding: 1,
									}}
									onPress={async () => {
										await dispatch(
											followUser(params.userId)
										);
										dispatch(getUserById(params.userId));
									}}
								>
									<Text
										style={{
											textAlign: 'center',
											textTransform: 'uppercase',
											fontFamily: 'Nunito_800ExtraBold',
											color: theme.primary,
										}}
									>
										{s.follow}
									</Text>
								</TouchableOpacity>
							))}
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
									{otherUser.firstName} {otherUser.lastName}
									{otherUser.validated && (
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
									{otherUser.premium && (
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
								{s.follows} {otherUser?.following?.length}
							</UserText>
							<UserText>
								{s.followers} {otherUser.followers}{' '}
							</UserText>
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
							{otherUser.createdQuizzes.length}
						</Text>
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							{s.createdQuizzes}
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
							{otherUser.completedQuiz.length}
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
								<StatText>{otherUser.totalScore}</StatText>
							</StatInfo>
						</StatCard>
						<StatCard>
							<View style={{ width: '50%' }}>
								<Icon2
									color={(() => {
										switch (selectDivision()) {
											case 'Bronze':
												return Bronze;
											case 'Silver':
												return Silver;
											case 'Gold':
												return Gold;
											case 'QuizMaster':
												return theme.primary;
											default:
												return theme.text;
										}
									})()}
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
								<StatText>{selectDivision()}</StatText>
							</StatInfo>
						</StatCard>
					</View>
					<StatsTitle>{s.achv}</StatsTitle>
					<View style={{ width: '100%' }}>
						{/* --------Perfil de Usuario-------- */}
						{otherUser.validated && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={theme.primary}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv9Title}
									</AchivText>
									<AchivText>{s.achiv9Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.premium && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={theme.primary}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv10Title}
									</AchivText>
									<AchivText>{s.achiv10Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{/* --------Creacion de Quizzes-------- */}
						{otherUser.createdQuizzes.length >= 1 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Bronze}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv1Title}
									</AchivText>
									<AchivText>{s.achiv1Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.createdQuizzes.length >= 5 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Silver}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv2Title}
									</AchivText>
									<AchivText>{s.achiv2Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.createdQuizzes.length >= 10 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Gold}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv3Title}
									</AchivText>
									<AchivText>{s.achiv3Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.createdQuizzes.length >= 25 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={theme.primary}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv4Title}
									</AchivText>
									<AchivText>{s.achiv4Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{/* --------Quizzes jugadas-------- */}
						{otherUser.completedQuiz.length >= 1 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Bronze}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv5Title}
									</AchivText>
									<AchivText>{s.achiv5Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.completedQuiz.length >= 5 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Silver}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv6Title}
									</AchivText>
									<AchivText>{s.achiv6Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.completedQuiz.length >= 20 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Gold}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv7Title}
									</AchivText>
									<AchivText>{s.achiv7Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.completedQuiz.length >= 50 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={theme.primary}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv8Title}
									</AchivText>
									<AchivText>{s.achiv8Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{/* ---------LikedQuiz-------- */}
						{otherUser.likedQuiz.length >= 1 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Bronze}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv11Title}
									</AchivText>
									<AchivText>{s.achiv11Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.likedQuiz.length >= 5 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Silver}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv12Title}
									</AchivText>
									<AchivText>{s.achiv12Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.likedQuiz.length >= 20 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={Gold}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv13Title}
									</AchivText>
									<AchivText>{s.achiv13Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
						{otherUser.completedQuiz.length >= 50 && (
							<AchivCard>
								<View style={{ width: '50%' }}>
									<Icon3
										color={theme.primary}
										name='badge'
										size={50}
									/>
								</View>
								<AchivInfo>
									<AchivText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{s.achiv14Title}
									</AchivText>
									<AchivText>{s.achiv14Text}</AchivText>
								</AchivInfo>
							</AchivCard>
						)}
					</View>
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
const InfoBox = styled.View`
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

const AchivCard = styled.View`
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
const AchivInfo = styled.View`
	height: 100%;
	padding: 15px;
	width: 50%;
	justify-content: space-around;
`;

const AchivText = styled.Text`
	color: ${(props) => props.theme.text};
	text-align: center;
	font-family: 'Nunito_600SemiBold';
`;

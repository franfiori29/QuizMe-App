import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

//Assets
import strings from './strings';

export default function Profile({ navigation }) {
	const { theme, language } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const [picture, setPicture] = useState(null);
	const s = strings[language];

	const openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); //pide permiso al usuario para acceder a la galeria

		if (permissionResult.granted === false) {
			alert(
				`The image is available for sharing at: ${picture.remoteUri}`
			);
			return;
		}

		const pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		} else {
			setPicture({ localUri: pickerResult.uri });
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<ScrollView style={{ flex: 1, backgroundColor: theme.bg }}>
				<Header>
					<HeaderButton onPress={() => navigation.goBack()}>
						<Icon
							name='ios-arrow-back'
							size={28}
							color={theme.text}
						/>
					</HeaderButton>
					<Text style={{ fontSize: 20, color: theme.text }}>
						{s.title}
					</Text>
					<HeaderButton>
						<Icon
							name='ios-home-outline'
							size={28}
							color={theme.text}
							onPress={() => navigation.navigate('Home')}
						/>
					</HeaderButton>
				</Header>
				<UserContainer>
					<TouchableOpacity onPress={openImagePickerAsync}>
						<UserImg
							source={{
								uri:
									picture !== null
										? picture.localUri
										: 'https://picsum.photos/150/150',
							}}
						/>
						<Pencil
							color={theme.text}
							name='ios-pencil'
							size={24}
						/>
					</TouchableOpacity>
					<UserInfo>
						<View>
							<UserName>
								{user.firstName} {user.lastName}
							</UserName>
							<Text
								style={{
									fontStyle: 'italic',
									color: theme.text,
								}}
							>
								Arjentyna
							</Text>
						</View>
						<View>
							<UserText style={{ marginBottom: 5 }}>
								{s.follow} 250
							</UserText>
							<UserText>40 {s.followers} </UserText>
						</View>
					</UserInfo>
				</UserContainer>
				<InfoBoxWrapper>
					<InfoBox>
						<Text style={{ color: theme.text, marginBottom: 5 }}>
							9
						</Text>
						<Text style={{ color: theme.text }}>{s.life}</Text>
					</InfoBox>
					<InfoBox>
						<Text style={{ color: theme.text, marginBottom: 5 }}>
							12
						</Text>
						<Text style={{ color: theme.text }}>{s.games}</Text>
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
								<StatText>Bronze manco</StatText>
							</StatInfo>
						</StatCard>
					</View>
				</StatsScreen>
			</ScrollView>
		</ThemeProvider>
	);
}

const Header = styled.View`
	width: 100%;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

const HeaderButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

const UserContainer = styled.View`
	height: 200px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	flex-direction: row-reverse;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	padding: 20px;
`;

const UserInfo = styled.View`
	padding: 10px 0;
	height: 100%;
	justify-content: space-around;
`;

const UserImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
`;
const Pencil = styled(Icon)`
	position: absolute;
	top: 0;
	right: 0;
	padding: 8px;
	z-index: 4;
	background-color: ${(props) => props.theme.bg};
	border: 2px solid ${(props) => props.theme.text};
	border-radius: 100px;
`;

const UserName = styled.Text`
	font-size: 30px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin-bottom: 5px;
`;

const UserText = styled.Text`
	color: ${(props) => props.theme.text};
`;

const InfoBoxWrapper = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
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
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;
const StatCard = styled.TouchableOpacity`
	width: 100%;
	height: 100px;
	border: 1px solid #ccc;
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
`;

import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import fb from '@root/src/firebase';
import { v4 as uuidv4 } from 'uuid';

//Redux
import { updateUser } from '@redux/reducers/user';

//Components
import NavBar from '@components/utils/NavBar';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

//Assets
import strings from './strings';

export default function Profile({ navigation }) {
	const { theme, language } = useSelector((state) => state.global);
	const { info } = useSelector((state) => state.user);
	const { info: user } = useSelector((state) => state.user);
	const [picture, setPicture] = useState(null);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const s = strings[language];

	// const stylesSpinner = StyleSheet.create({
	// 	spinnerTextStyle: {
	// 		color: theme.text,
	// 	},
	// });

	const openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); //pide permiso al usuario para acceder a la galeria

		if (permissionResult.granted === false) {
			alert(
				`The image is available for sharing at: ${picture.remoteUri}`,
			);
			return;
		}

		const pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		} else {
			/* --- SUBE IMAGEN A FIREBASE --- */
			setLoading(true);
			let url;
			let randomID = uuidv4();
			try {
				const blob = await new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.onload = function () {
						resolve(xhr.response);
					};
					xhr.onerror = function (e) {
						reject(new TypeError('Network request failed'));
					};
					xhr.responseType = 'blob';
					xhr.open('GET', pickerResult.uri, true);
					xhr.send(null);
				});
				const ref = fb.storage().ref(`profilePic/${randomID}`);
				const snapshot = await ref.put(blob);
				url = await snapshot.ref.getDownloadURL();

				if (Platform.OS !== 'web') {
					blob.close();
				}
				setPicture({ localUri: url });
				dispatch(updateUser({ profilePic: url }));
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<ScrollView style={{ flex: 1, backgroundColor: theme.bg }}>
				<NavBar
					string={s.title}
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('Home')}
					icon1='ios-arrow-back'
					icon2='ios-home-outline'
				/>
				<UserContainer>
					<TouchableOpacity onPress={openImagePickerAsync}>
						<UserImg
							source={{
								uri: info.profilePic
									? info.profilePic
									: 'https://picsum.photos/150/150',
							}}
						/>
						{loading && (
							<View
								style={{
									position: 'absolute',
									top: -1,
									left: -1,
									zIndex: 5,
									height: 122,
									width: 122,
									borderRadius: 100,
									alignItems: 'center',
									backgroundColor: 'rgba(0,0,0,0.7)',
								}}
							>
								<View
									style={{
										alignSelf: 'center',
										margin: 'auto',
									}}
								>
									<Spinner
										visible={loading}
										textContent={'Loading'}
										color={theme.white}
										textStyle={{
											color: theme.white,
										}}
									/>
								</View>
							</View>
						)}
						<Pencil
							color={theme.primary}
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
								Argentina
							</Text>
						</View>
						<View>
							<UserText style={{ marginBottom: 5 }}>
								{s.follow} 250
							</UserText>
							<UserText>{s.followers} 40 </UserText>
						</View>
						<AccTypeButton>
							<Text
								style={{
									color: theme.primary,
									textTransform: 'uppercase',
								}}
							>
								{s.validate}
							</Text>
						</AccTypeButton>
					</UserInfo>
				</UserContainer>
				<InfoBoxWrapper>
					<InfoBox
						style={{
							borderRightColor: '#dddddd',
							borderRightWidth: 1,
						}}
					>
						<Text style={{ color: theme.primary, marginBottom: 5 }}>
							9
						</Text>
						<Text style={{ color: theme.text }}>{s.life}</Text>
					</InfoBox>
					<InfoBox>
						<Text style={{ color: theme.primary, marginBottom: 5 }}>
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
				</StatsScreen>
			</ScrollView>
		</ThemeProvider>
	);
}

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

const UserInfo = styled.View`
	padding: 10px 0;
	height: 100%;
	justify-content: space-around;
`;

const UserImg = styled.Image`
	z-index: 3;
	height: 120px;
	width: 120px;
	border-radius: 100px;
`;
const Pencil = styled(Icon)`
	position: absolute;
	top: 0;
	right: 0;
	padding: 8px;
	z-index: 10;
	background-color: ${(props) => props.theme.bg};
	border: 2px solid ${(props) => props.theme.text};
	border-radius: 100px;
`;

const UserName = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: ${(props) => props.theme.primary};
	margin-bottom: 5px;
`;

const UserText = styled.Text`
	color: ${(props) => props.theme.text};
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
	font-weight: bold;
	text-align: center;
`;
const StatCard = styled.TouchableOpacity`
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

import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
	Avatar,
	Title,
	Caption,
	Text,
	TouchableRipple,
} from 'react-native-paper';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

export default function Profile({ navigation }) {
	const { info: user } = useSelector((state) => state.user);
	return (
		<SafeAreaView style={styles.container}>
			<Header>
				<HeaderButton onPress={() => navigation.goBack()}>
					<Icon name='ios-arrow-back' size={28} />
				</HeaderButton>
				<Text style={{ fontSize: 20 }}>QuizMe App</Text>
				<HeaderButton>
					<Icon name='ios-home-outline' size={28} onPress={() => navigation.navigate('Home')}/>
				</HeaderButton>
			</Header>
			<View style={styles.userInfoSection}>
				<View style={{ flexDirection: 'row', marginTop: 20 }}>
					<Avatar.Image
						source={{
							uri: 'https://picsum.photos/100/100',
						}}
						size={120}
					/>
					<View style={{ marginLeft: 20 }}></View>
				</View>
			</View>
			<View style={styles.userInfoSection}>
				<Title
					style={[
						styles.title,
						{
							marginTop: 10,
							marginBottom: 5,
						},
					]}
				>
					{user.firstName} {user.lastName}
				</Title>
				<View style={styles.row}>
					{/* <Icon name="map-marker-radius" color="#777777" size={20}/> */}
					<Text style={{ color: '#777777' }}>{user.email}</Text>
				</View>
				<View style={styles.row}>
					{/* <Icon name="phone" color="#777777" size={20}/> */}
					<Text style={{ color: '#777777' }}>{user.countryCode}</Text>
				</View>
			</View>
			<View style={styles.infoBoxWrapper}>
				<View
					style={[
						styles.infoBox,
						{
							borderRightColor: '#dddddd',
							borderRightWidth: 1,
						},
					]}
				>
					<Title>9</Title>
					<Caption>Vidas</Caption>
				</View>
				<View style={styles.infoBox}>
					<Title>12</Title>
					<Caption>Partidas Jugadas</Caption>
				</View>
			</View>
			<View style={styles.menuWrapper}>
				<TouchableRipple onPress={() => {}}>
					<View style={styles.menuItem}>
						<Text style={[styles.menuItemText, { marginTop: 10 }]}>
							Convertirme a Premium
						</Text>
					</View>
				</TouchableRipple>
				<TouchableRipple onPress={() => {}}>
					<View style={styles.menuItem}>
						<Text style={styles.menuItemText}>Mis quizzes</Text>
					</View>
				</TouchableRipple>
				<TouchableRipple onPress={() => {}}>
					<View style={styles.menuItem}>
						<Text style={styles.menuItemText}>
							Suscripción a escuelas
						</Text>
					</View>
				</TouchableRipple>
				<TouchableRipple onPress={() => {}}>
					<View style={styles.menuItem}>
						<Text style={styles.menuItemText}>
							Ajustes de perfil
						</Text>
					</View>
				</TouchableRipple>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	userInfoSection: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 15,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
		fontWeight: '500',
	},
	row: {
		flexDirection: 'row',
	},
	infoBoxWrapper: {
		borderBottomColor: '#dddddd',
		borderBottomWidth: 1,
		borderTopColor: '#dddddd',
		borderTopWidth: 1,
		flexDirection: 'row',
		height: 100,
	},
	infoBox: {
		width: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	menuWrapper: {
		marginTop: 5,
	},
	menuItem: {
		flexDirection: 'row',
		paddingVertical: 15,
		paddingHorizontal: 30,
	},
	menuItemText: {
		color: '#777777',
		marginLeft: 20,
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 26,
	},
});
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

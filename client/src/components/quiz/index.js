import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Quiz = ({ navigation, route: { params } }) => {
	const question = params.question;
	return (
		<Screen>
			<Header>
				<Exit onPress={() => navigation.goBack()}>
					<Icon name='ios-close' size={28} />
					<Text>Abandonar!</Text>
				</Exit>
				<Text style={{ width: '33%', textAlign: 'center' }}>2600</Text>
				<Text style={{ width: '33%', textAlign: 'center' }}>3/10</Text>
			</Header>
			<View style={{ position: 'relative' }}>
				<TimeBar></TimeBar>
				<Text style={{ position: 'absolute', right: 10 }}>Ayuda!</Text>
			</View>
			<MiddleScreen>
				<Text
					style={{ marginTop: 50, fontWeight: 'bold', fontSize: 20 }}
				>
					{question.title}
				</Text>
				<QuizImg
					source={{
						uri: question.image ? question.image : params.imagePapi,
					}}
				/>
			</MiddleScreen>
			<BottomScreen>
				{question.options.map((option, i) => (
					<Option key={i}>
						<Text style={{ alignSelf: 'center' }}>
							{option.title}
						</Text>
					</Option>
				))}
			</BottomScreen>
		</Screen>
	);
};

const Option = styled.TouchableOpacity`
	border: 1px solid black;
	width: 100%;
	flex: 1;
	justify-content: center;
`;

const TimeBar = styled.View`
	background-color: blue;
	height: 20px;
	width: 80%;
`;

const QuizImg = styled.Image`
	z-index: 3;
	height: 70%;
	width: 90%;
`;

const MiddleScreen = styled.View`
	height: 40%;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

const BottomScreen = styled.View`
	background-color: #55f;
	height: 40%;
	width: 100%;
	margin-top: auto;
	align-items: center;
	justify-content: space-between;
`;

const Screen = styled.View`
	flex: 1;
	border: 1px solid black;
`;

const Header = styled.View`
	width: 100%;
	height: 8%;
	padding: 10px;
	background-color: #55f;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Exit = styled.TouchableOpacity`
	width: 33%;
	align-items: center;
	justify-content: center;
`;

export default Quiz;

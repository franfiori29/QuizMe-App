import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

//Styles ==>
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Quiz = ({ navigation, route: { params } }) => {
	const { theme } = useSelector((state) => state.global);
	const question = params.question;

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<Header>
					<Exit onPress={() => navigation.goBack()}>
						<Icon name='ios-close' color={theme.text} size={28} />
						<Text style={{ color: theme.text }}>Abandonar!</Text>
					</Exit>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
						}}
					>
						2600
					</Text>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
						}}
					>
						3/10
					</Text>
				</Header>
				<View style={{ position: 'relative' }}>
					<TimeBar></TimeBar>
					<Text
						style={{
							position: 'absolute',
							right: 10,
							color: theme.text,
						}}
					>
						Ayuda!
					</Text>
				</View>
				<MiddleScreen>
					<Text
						style={{
							marginTop: 50,
							fontWeight: 'bold',
							fontSize: 20,
							color: theme.text,
						}}
					>
						{question.title}
					</Text>
					<QuizImg
						source={{
							uri: question.image
								? question.image
								: params.imagePapi,
						}}
					/>
				</MiddleScreen>
				<BottomScreen>
					{question.options.map((option, i) => (
						<Option key={i}>
							<Text
								style={{
									alignSelf: 'center',
									color: theme.text,
								}}
							>
								{option.title}
							</Text>
						</Option>
					))}
				</BottomScreen>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.View`
	flex: 1;
	border: 1px solid black;
	background-color: ${(props) => props.theme.bg};
`;

const Header = styled.View`
	width: 100%;
	height: 8%;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.bg};
`;

const Option = styled.TouchableOpacity`
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	border-top-width: 1px;
	border-top-color: #ccc;
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
	background-color: ${(props) => props.theme.bg};
	height: 40%;
	width: 100%;
	margin-top: auto;
	align-items: center;
	justify-content: space-between;
`;

const Exit = styled.TouchableOpacity`
	width: 33%;
	align-items: center;
	justify-content: center;
`;

export default Quiz;

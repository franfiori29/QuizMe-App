import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { REACT_APP_API } from '@env';

//==> Styles
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import request, { gql, GraphQLClient } from 'graphql-request';
import { getQuizzes } from '@redux/quizzes';

const HomeScreen = ({ navigation }) => {
	const { info: user } = useSelector((state) => state.user);
	const { quizzes } = useSelector((state) => state.quiz);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getQuizzes());
	}, []);
	return (
		<Screen centerContent={true}>
			<Header>
				<HeaderButton onPress={() => navigation.navigate('UserMenu')}>
					<Icon name='ios-menu-outline' size={28} />
				</HeaderButton>
				<Text style={{ fontSize: 20 }}>QuizMeUp</Text>
				<HeaderButton>
					<Icon name='ios-search-outline' size={28} />
				</HeaderButton>
			</Header>
			<IntroContainer>
				<IntroImg source={{ uri: 'https://picsum.photos/100/100' }} />
				<IntroTitle>
					¡Bienvenido, {user.firstName} {user.lastName} !
				</IntroTitle>
				<IntroText>
					{' '}
					Aca te mostramos unas sugerencias para que te pongas a
					viciar y nos compres la membresia
				</IntroText>
			</IntroContainer>
			<View>
				<SelectorContainer>
					<SelectorButton>
						<SelectorText>Seguidos</SelectorText>
					</SelectorButton>
					<SelectorButton>
						<SelectorText>Populares</SelectorText>
					</SelectorButton>
				</SelectorContainer>
				<QuizCards>
					{!!quizzes.length &&
						quizzes.map((quiz) => (
							<QuizCard
								key={quiz._id}
								onPress={() =>
									navigation.navigate('QuizIndex', { quiz })
								}
							>
								<QuizImg
									source={{
										uri: quiz.image,
									}}
								/>
								<QuizInfo>
									<QuizTitle>{quiz.title}</QuizTitle>
									<Text>{quiz.description}</Text>
									<Text>{quiz.likes} Likes</Text>
								</QuizInfo>
								<QuizCheck>
									<Text>Completado</Text>
									<Icon
										name='checkmark-circle-outline'
										size={20}
										style={{ color: 'green' }}
									/>
								</QuizCheck>
							</QuizCard>
						))}
				</QuizCards>
			</View>
			<CategoryContainer>
				<CategoryImg source={{ uri: 'https://picsum.photos/75/75' }} />
				<CategoryTitle>¡Busca por categorias!</CategoryTitle>
			</CategoryContainer>
			<View>
				<ScrollCategory
					horizontal={true}
					centerContent={true}
					overScrollMode='never'
				>
					<Category>
						<CategoryName>html</CategoryName>
					</Category>
					<Category>
						<CategoryName>css</CategoryName>
					</Category>
					<Category>
						<CategoryName>javascript</CategoryName>
					</Category>
					<Category>
						<CategoryName>react</CategoryName>
					</Category>
					<Category>
						<CategoryName>mongo</CategoryName>
					</Category>
				</ScrollCategory>
			</View>
			<QuizCards>
				<QuizCard onPress={() => navigation.navigate('QuizIndex')}>
					<QuizImg
						source={{ uri: 'https://picsum.photos/100/100' }}
					/>
					<QuizInfo>
						<QuizTitle>Titulo del Quiz</QuizTitle>
						<Text>Descripcion breve del Quiz</Text>
						<Text>Jugado 77898798 Veces - 1903 Likes</Text>
					</QuizInfo>
					<QuizCheck>
						<Text>Completado</Text>
						<Icon
							name='checkmark-circle-outline'
							size={20}
							style={{ color: 'green' }}
						/>
					</QuizCheck>
				</QuizCard>
				<QuizCard onPress={() => navigation.navigate('QuizIndex')}>
					<QuizImg
						source={{ uri: 'https://picsum.photos/100/100' }}
					/>
					<QuizInfo>
						<QuizTitle>Titulo del Quiz</QuizTitle>
						<Text>Descripcion breve del Quiz</Text>
						<Text>Jugado 77898798 Veces - 1903 Likes</Text>
					</QuizInfo>
					<QuizCheck>
						<Text>Completado</Text>
						<Icon
							name='checkmark-circle-outline'
							size={20}
							style={{ color: 'green' }}
						/>
					</QuizCheck>
				</QuizCard>
			</QuizCards>
			<CategoryContainer>
				<CategoryImg source={{ uri: 'https://picsum.photos/75/75' }} />
				<CategoryTitle>¿No encontraste uno que te guste?</CategoryTitle>
			</CategoryContainer>
			<Button
				title='Dame un Quiz Random'
				style={{ margin: '40px auto' }}
				onPress={() => navigation.navigate('QuizIndex')}
			/>
			<BottomBar>
				<Text style={{ fontSize: 20 }}>QuizMeUp</Text>
			</BottomBar>
		</Screen>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
`;

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

const IntroContainer = styled.View`
	height: 300px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: 50px 0;
`;

const IntroImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;

const IntroText = styled.Text`
	text-align: center;
	padding: 0 10px;
`;

const SelectorContainer = styled.View`
	width: 100%;
	flex-direction: row;
`;

const SelectorButton = styled.TouchableOpacity`
	width: 50%;
	height: 65px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	border-top-width: 1px;
	border-top-color: #ccc;
	align-items: center;
	justify-content: center;
`;

const SelectorText = styled.Text`
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
`;

const QuizCards = styled.View`
	width: 100%;
`;
const QuizCard = styled.TouchableOpacity`
	width: 100%;
	height: 100px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 0 10px;
`;

const QuizImg = styled.Image`
	z-index: 3;
	height: 70px;
	width: 70px;
	border-radius: 25px;
`;

const QuizInfo = styled.View`
	height: 100%;
	padding: 15px;
	justify-content: space-around;
`;

const QuizTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;

const QuizCheck = styled.View`
	position: absolute;
	top: 5px;
	right: 5px;
	flex-direction: row-reverse;
	align-items: center;
`;
const CategoryContainer = styled.View`
	height: 150px;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	margin: 20px 0;
`;

const CategoryImg = styled.Image`
	z-index: 3;
	height: 75px;
	width: 75px;
	border-radius: 25px;
`;

const CategoryTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
`;

const ScrollCategory = styled.ScrollView`
	border-top-width: 1px;
	border-top-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	height: 80px;
`;

const Category = styled.TouchableOpacity`
	height: 60px;
	width: 200px;
	margin: auto 20px;
	border: 2px solid black;
	justify-content: center;
	align-items: center;
`;

const CategoryName = styled.Text`
	font-size: 18px;
	text-align: center;
	text-transform: uppercase;
`;

const BottomBar = styled.View`
	width: 100%;
	height: 50px;
	padding: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	border-top-width: 1px;
	border-top-color: #ccc;
`;
export default HomeScreen;

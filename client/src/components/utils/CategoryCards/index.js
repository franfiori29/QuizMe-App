import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import strings from '@components/admin_panel/strings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { destroyCategory } from '../../../redux/reducers/categories';

const CategoryCards = () => {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const { categories } = useSelector((state) => state.categories);
	const s = strings[language];
	const navigation = useNavigation();
	return (
		<CategoryCardsContainer>
			{categories &&
				!!categories.length &&
				categories.map((category) => (
					<CategoryCard key={category._id}>
						<CategoryInfo>
							<CategoryInfoTitle
								numberOfLines={1}
								ellipsizeMode='tail'
							>
								{category[`description_${language}`]}
							</CategoryInfoTitle>
							<Buttons>
								{/* <Button
									bgColor={theme.wrong}
									onPress={async () => {
										await dispatch(
											destroyCategory(category._id)
										);
										dispatch(getCategories(language));
									}}
								>
									<ButtonText>{s.deleteCategory}</ButtonText>
								</Button> */}
								<Button
									onPress={() => {
										navigation.navigate('EditCategory', {
											category,
										});
									}}
								>
									<FontAwesome5
										name={'edit'}
										color={'rgb(250,210,1)'}
										size={25}
										style={{ marginRight: 5 }}
									/>
									<ButtonText>{s.editCategory}</ButtonText>
								</Button>
							</Buttons>
						</CategoryInfo>
					</CategoryCard>
				))}
		</CategoryCardsContainer>
	);
};

const CategoryCardsContainer = styled.View`
	width: 95%;
	align-self: center;
`;
const CategoryCard = styled.View`
	width: 100%;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 15px 10px 10px 0px;
`;

const CategoryInfo = styled.View`
	flex: 1;
	flex-direction: row;
	height: 100%;
	padding: 5px 15px;
	justify-content: space-between;
`;

const CategoryInfoTitle = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin-top: 3px;
`;

const Buttons = styled.TouchableOpacity`
	flex-direction: row;
`;

const Button = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;
const ButtonText = styled.Text`
	text-transform: uppercase;
	font-weight: bold;
	color: ${(props) => props.theme.text};
`;

export default CategoryCards;

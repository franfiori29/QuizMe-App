import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/admin_panel/strings';
import {
	destroyCategory,
	getCategories,
} from '../../../redux/reducers/categories';

const CategoryCards = () => {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const { categories } = useSelector((state) => state.categories);
	const s = strings[language];
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
								<Button
									bgColor={theme.wrong}
									onPress={async () => {
										await dispatch(
											destroyCategory(category._id),
										);
										dispatch(getCategories(language));
									}}
								>
									<ButtonText>Eliminar Categoria</ButtonText>
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
	height: 120px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 15px 10px 10px 0px;
`;

const CategoryImg = styled.Image`
	z-index: 3;
	height: 80px;
	width: 80px;
	border-radius: 10px;
`;

const CategoryInfo = styled.View`
	height: 100%;
	width: 85%;
	padding: 0 15px;
	justify-content: space-around;
`;

const CategoryInfoTitle = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin-top: 3px;
`;

const Buttons = styled.TouchableOpacity`
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
`;

const Button = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	background-color: ${({ bgColor }) => bgColor};
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
`;
const ButtonText = styled.Text`
	text-transform: uppercase;
	font-weight: bold;
	color: ${(props) => props.theme.white};
`;

export default CategoryCards;

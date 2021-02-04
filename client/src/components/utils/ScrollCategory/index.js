import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Vibrate } from '@utils/vibration';
import styled from 'styled-components/native';

const ScrollCategory = ({ categories, handleSelect }) => {
	const { language, vibration } = useSelector((state) => state.global);
	const [selected, setSelected] = useState(-1);

	return (
		<ScrollCategoryStyled
			horizontal={true}
			centerContent={true}
			overScrollMode='never'
		>
			{categories.map((category) => (
				<Category
					selectedColor={
						selected === category._id ? '#01493d' : false
					}
					key={category._id}
					onPress={() => {
						setSelected((prev) =>
							prev === category._id
								? setSelected(-1)
								: setSelected(category._id),
						);
						handleSelect(
							selected === category._id ? '' : category._id,
						);

						Vibrate(100, vibration);
					}}
				>
					<CategoryName>
						{category[`description_${language}`]}
					</CategoryName>
				</Category>
			))}
		</ScrollCategoryStyled>
	);
};

const ScrollCategoryStyled = styled.ScrollView`
	border-top-width: 1px;
	border-top-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	height: 80px;
	width: 95%;
	align-self: center;
`;

const Category = styled.TouchableOpacity`
	height: 60px;
	width: 200px;
	margin: auto 20px;
	border: 2px solid ${(props) => props.theme.primary};
	justify-content: center;
	align-items: center;
	background-color: ${({ selectedColor }) => selectedColor || 'transparent'};
	border-radius: 5px;
`;

const CategoryName = styled.Text`
	font-size: 18px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
	font-family: 'Nunito_800ExtraBold';
`;

export default ScrollCategory;

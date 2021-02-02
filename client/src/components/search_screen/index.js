import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
	getQuizzesBySearchInput,
	clearfilteredQuizzes,
} from '@redux/reducers/quizzes';
import { Picker } from '@react-native-picker/picker';

//==> Components
import NavBar from '@components/utils/NavBar';
import QuizCard from '@components/utils/QuizCard';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

//==> Assets
import strings from './strings';
import logo from '@assets/logo.png';

const SearchScreen = ({ navigation, route: { params } }) => {
	const { language, theme } = useSelector((state) => state.global);
	const { categories } = useSelector((state) => state.categories);
	const { filteredQuizzes, hasNextPage } = useSelector((state) => state.quiz);
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState('');
	const [categoryFilter, setCategoryFilter] = useState('');
	const s = strings[language];
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [loadingMore, setLoadingMore] = useState(false);

	const handleSearch = (filter, nextPage) => {
		dispatch(
			getQuizzesBySearchInput({
				searchInput,
				categoryFilter: filter,
				page: nextPage,
			})
		).then(() => {
			setLoading(false);
			setPage((prev) => prev + 1);
			setLoadingMore(false);
		});
	};

	useEffect(() => {
		if (params?.catHomeScreenFilter) {
			setCategoryFilter(params.catHomeScreenFilter);
			setPage(2);
		}
	}, [params]);

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string={s.nav}
					nav1={() => {
						navigation.goBack();
						dispatch(clearfilteredQuizzes());
					}}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<InputContainer>
					<Title>{s.title}</Title>
					<IconImage
						name={'ios-search-outline'}
						size={28}
						color={'rgba(255,255,255,0.7)'}
						onPress={handleSearch}
					/>
					<InputLogin
						placeholder={s.ph1}
						placeholderTextColor={theme.text}
						underlineColorAndroid='transparent'
						onChangeText={setSearchInput}
						onSubmitEditing={() => {
							setPage(1);
							setLoading(true);
							dispatch(clearfilteredQuizzes());
							handleSearch(categoryFilter, 1);
						}}
					/>
				</InputContainer>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							marginRight: 10,
							fontSize: 16,
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						Category:
					</Text>
					<Picker
						selectedValue={categoryFilter}
						style={{
							height: 40,
							width: '65%',
							color: theme.text,
							backgroundColor: theme.bg,
							borderRadius: 10,
							padding: 10,
							borderColor: theme.primary,
							fontFamily: 'Nunito_400Regular',
						}}
						onValueChange={(value) => {
							setPage(1);
							setLoading(true);
							dispatch(clearfilteredQuizzes());
							handleSearch(value, 1);
							setCategoryFilter(value);
						}}
					>
						<Picker.Item label='All' value='' />
						{categories.map((cat) => (
							<Picker.Item
								key={cat._id}
								value={cat._id}
								label={cat[`description_${language}`]}
							/>
						))}
					</Picker>
				</View>
				{loading ? (
					<ActivityIndicator size='large' color={theme.primary} />
				) : filteredQuizzes.length ? (
					<FlatList
						style={{}}
						data={filteredQuizzes}
						renderItem={(item) => <QuizCard quiz={item.item} />}
						keyExtractor={(item) => item._id}
						refreshing={loading}
						onEndReachedThreshold={10}
						ListFooterComponent={() =>
							filteredQuizzes.length > 0 &&
							hasNextPage && (
								<ButtonLoadMore
									onPress={() => {
										if (!loadingMore) {
											handleSearch(categoryFilter, page);
											setLoadingMore(true);
										}
									}}
								>
									<Description>
										{loadingMore ? s.loading : s.loadMore}
									</Description>
								</ButtonLoadMore>
							)
						}
					/>
				) : (
					<View
						style={{
							justifyContent: 'space-between',
							height: '100%',
							margin: 10,
						}}
					>
						<SearchMessage>{s.msg1}</SearchMessage>
						<Logo source={logo} />
					</View>
				)}
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const Title = styled.Text`
	width: 95%;
	align-self: center;
	color: ${(props) => props.theme.text};
	font-size: 28px;
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
`;
const InputContainer = styled.View`
	margin-top: 10px;
`;
const InputLogin = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 45px;
	border-radius: 5px;
	border: 2px solid ${(props) => props.theme.primary};
	font-size: 16px;
	padding: 15px;
	background-color: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.text};
	margin: 10px 0;
	font-family: 'Nunito_400Regular';
`;
const IconImage = styled(Icon)`
	color: ${(props) => props.theme.primary};
	position: absolute;
	top: 54px;
	right: 35px;
	z-index: 1;
`;

const SearchMessage = styled.Text`
	color: #999;
	font-size: 26px;
	text-align: center;
	margin: 20px auto;
	font-family: 'Nunito_600SemiBold_Italic';
`;

const Logo = styled.Image`
	align-self: flex-start;
	width: 200px;
	height: 200px;
	opacity: 0.3;
`;

const ButtonLoadMore = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	height: 45px;
	background-color: ${(props) => props.theme.primary};
	justify-content: center;
	margin: 20px auto;
	padding: 16px 70px;
	border-radius: 5px;
`;
const Description = styled.Text`
	color: ${(props) => props.theme.white};
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	font-family: 'Nunito_800ExtraBold';
`;

export default SearchScreen;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';
import { mutationUpdateHighscore } from './querys/quizzes';
import { shuffle } from '@utils/shuffle';

export const EntireQuizInfo = gql`
	fragment EntireQuizInfo on Quiz {
		_id
		title
		description
		image
		likes
		time
		categoryId {
			_id
			description_en
			description_es
		}
		questions {
			_id
			title
			score
			image
			options {
				title
				result
			}
		}
	}
`;

/* --- Get all quizzes --- */
const queryAllQuizzes = gql`
	{
		getQuizzes {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const getQuizzes = createAsyncThunk(
	'quiz/getAll',
	async (_, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryAllQuizzes);
		if (clientRequest.getQuizzes) {
			clientRequest.getQuizzes = shuffle(clientRequest.getQuizzes);
		}
		return clientRequest;
	}
);
const updateLikeRequest = gql`
	mutation updateLike($quizId: ID!, $giveLike: Boolean) {
		updateLike(quizId: $quizId, giveLike: $giveLike) {
			likes
			_id
		}
	}
`;
export const updateLike = createAsyncThunk(
	'quiz/updateLike',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(updateLikeRequest, {
			quizId: payload.quizId,
			giveLike: payload.giveLike,
		});
		return clientRequest;
	}
);

/* --- Create Quiz --- */
const quizCreateOne = gql`
	mutation createQuiz($payload: QuizInput) {
		createQuiz(quiz: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const createQuiz = createAsyncThunk(
	'quiz/createOne',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(quizCreateOne, { payload });
		return clientRequest;
	}
);

const queryGetQuizByCategory = gql`
	query($payload: ID!) {
		getQuizByCategory(catId: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const getQuizByCategory = createAsyncThunk(
	'quiz/getByCat',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetQuizByCategory, {
			payload,
		});
		if (clientRequest.getQuizByCategory) {
			clientRequest.getQuizByCategory = shuffle(
				clientRequest.getQuizByCategory
			);
		}
		return clientRequest;
	}
);

const queryGetQuizzesBySearchInput = gql`
	query($searchInput: String!, $categoryFilter: String, $page: Int) {
		getQuizzesByInputSearch(
			input: $searchInput
			cat: $categoryFilter
			page: $page
		) {
			quizzes {
				...EntireQuizInfo
			}
			hasNextPage
		}
	}
	${EntireQuizInfo}
`;

export const getQuizzesBySearchInput = createAsyncThunk(
	'quiz/getQuizzesBySearchInput',
	async ({ searchInput, categoryFilter, page }, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(
			queryGetQuizzesBySearchInput,
			{ searchInput, categoryFilter, page }
		);
		return clientRequest;
	}
);

/* --- Get random quiz --- */
const queryRandomQuiz = gql`
	{
		getRandomQuiz {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const getRandomQuiz = createAsyncThunk(
	'quiz/getRandom',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryRandomQuiz);
		return clientRequest;
	}
);

export const updateHighscore = createAsyncThunk(
	'quiz/updateHighscore',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationUpdateHighscore, {
			quizId: payload.quizId,
			score: payload.score,
		});
		return clientRequest;
	}
);

/*Get quizzes by popularity*/

const queryGtQuizzesByPopularity = gql`
	{
		searchByPopularity {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const getQuizzesByPopularity = createAsyncThunk(
	'quiz/getQuizzesByPopularity',
	async (_, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGtQuizzesByPopularity);
		return clientRequest;
	}
);
const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		quiz: {},
		quizzes: [],
		filteredQuizzes: [],
		hasNextPage: true,
		categories: [],
		randomQuiz: {},
	},
	reducers: {
		clearfilteredQuizzes: (state) => {
			state.filteredQuizzes = [];
		},
	},
	extraReducers: {
		[getQuizzes.fulfilled]: (state, { payload }) => {
			state.quizzes = payload.getQuizzes;
			state.categories = payload.getCategories;
		},
		[createQuiz.fulfilled]: (state, { payload }) => {
			state.quizzes.push(payload.createQuiz);
		},
		[updateLike.fulfilled]: (state, { payload }) => {
			let quiz = state.quizzes.findIndex(
				(quiz) => quiz._id === payload.updateLike._id
			);
			state.quizzes[quiz].likes = payload.updateLike.likes;
		},
		[getQuizByCategory.fulfilled]: (state, { payload }) => {
			state.filteredQuizzes = payload.getQuizByCategory;
		},
		[getRandomQuiz.fulfilled]: (state, { payload }) => {
			state.randomQuiz = payload.getRandomQuiz;
		},
		[getQuizzesBySearchInput.fulfilled]: (state, { payload }) => {
			state.hasNextPage = payload.getQuizzesByInputSearch.hasNextPage;
			state.filteredQuizzes = [
				...state.filteredQuizzes,
				...payload.getQuizzesByInputSearch.quizzes,
			];
		},
		[updateHighscore.fulfilled]: (state, { payload }) => {
			state.quiz.newHighscore = payload.updateHighscore;
		},
		[getQuizzesByPopularity.fulfilled]: (state, { payload }) => {
			state.quizzes = payload.searchByPopularity;
		},
	},
});

export const { clearfilteredQuizzes } = quizSlice.actions;

export default quizSlice.reducer;

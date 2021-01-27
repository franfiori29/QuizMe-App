import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';

const EntireQuizInfo = gql`
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
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryAllQuizzes);
		return clientRequest;
	}
);
const updateLikeRequest = gql`
input updatePayload {
	quizId: ID!, 
	giveLike: Boolean
}
 mutation updateLike($payload:updatePayload){
	 updateLike(quizId: $payload.quizId, giveLike: $payload.giveLike){
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
			payload,
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
		return clientRequest;
	}
);

const queryGetQuizzesBySearchInput = gql`
	query($payload: String!) {
		getQuizzesByInputSearch(input: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const getQuizzesBySearchInput = createAsyncThunk(
	'quiz/getQuizzesBySearchInput',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(
			queryGetQuizzesBySearchInput,
			{
				payload,
			}
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

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		quiz: {},
		quizzes: [],
		filteredQuizzes: [],
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
			let quiz = state.quizzes.find((quiz) => (quiz._id = payload._id));
			quiz.likes = payload.likes;
    },
		[getQuizByCategory.fulfilled]: (state, { payload }) => {
			state.filteredQuizzes = payload.getQuizByCategory;
		},
		[getRandomQuiz.fulfilled]: (state, { payload }) => {
			state.randomQuiz = payload.getRandomQuiz;
		},
		[getQuizzesBySearchInput.fulfilled]: (state, { payload }) => {
			state.filteredQuizzes = payload.getQuizzesByInputSearch;
		},
	},
});

export const { clearfilteredQuizzes } = quizSlice.actions;

export default quizSlice.reducer;

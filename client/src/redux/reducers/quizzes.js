import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';
import { useSelector } from 'react-redux';

/* --- Get all quizzes --- */
const queryAllQuizzes = gql`
	{
		getQuizzes {
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
	}
`;

export const getQuizzes = createAsyncThunk(
	'quiz/getAll',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryAllQuizzes);
		return clientRequest;
	}
);

/* --- Create Quiz --- */
const quizCreateOne = gql`
	mutation createQuiz($payload: QuizInput) {
		createQuiz(quiz: $payload) {
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
	}
`;
const queryGetQuizByCategory = gql`
	query($payload: ID!) {
		getQuizByCategory(catId: $payload) {
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
	}
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

export const createQuiz = createAsyncThunk(
	'quiz/createOne',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(quizCreateOne, { payload });
		return clientRequest;
	}
);

/* --- Get random quiz --- */
const queryRandomQuiz = gql`
	{
		getRandomQuiz {
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
	}
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
	extraReducers: {
		[getQuizzes.fulfilled]: (state, { payload }) => {
			state.quizzes = payload.getQuizzes;
			state.categories = payload.getCategories;
		},
		[createQuiz.fulfilled]: (state, { payload }) => {
			state.quizzes.push(payload.createQuiz);
		},
		[getQuizByCategory.fulfilled]: (state, { payload }) => {
			state.filteredQuizzes = payload.getQuizByCategory;
		},
		[getRandomQuiz.fulfilled]: (state, { payload }) => {
			state.randomQuiz = payload.getRandomQuiz;
		},
	},
});

export default quizSlice.reducer;

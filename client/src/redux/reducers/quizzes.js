import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';

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
export const createQuiz = createAsyncThunk(
	'quiz/createOne',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(quizCreateOne, { payload });
		return clientRequest;
	}
);

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		quiz: {},
		quizzes: [],
		categories: [],
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
	},
});

export default quizSlice.reducer;

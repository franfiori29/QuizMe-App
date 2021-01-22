import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '../constants/api';
import { gql } from 'graphql-request';

const queryAllQuizzes = gql`
	{
		getQuizzes {
			_id
			title
			description
			image
			likes
			categoryId {
				_id
				description_en
				description_es
			}
			questions {
				_id
				title
				score
				time
				image
				options {
					title
					result
				}
			}
		}
		getCategories {
			_id
			description_en
			description_es
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

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		quiz: {},
		quizzes: [],
		categories: [],
	},
	extraReducers: {
		[getQuizzes.fulfilled]: (state, action) => {
			state.quizzes = action.payload.getQuizzes;
			state.categories = action.payload.getCategories;
		},
	},
});

export default quizSlice.reducer;

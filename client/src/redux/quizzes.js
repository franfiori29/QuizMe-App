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
	}
`;

export const getQuizzes = createAsyncThunk(
	'quizz/getAll',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryAllQuizzes);
		return clientRequest.getQuizzes;
	}
);

const quizSlice = createSlice({
	name: 'user',
	initialState: {
		quiz: {},
		quizzes: [],
	},
	extraReducers: {
		[getQuizzes.fulfilled]: (state, action) => {
			state.quizzes = action.payload;
		},
	},
});

export default quizSlice.reducer;

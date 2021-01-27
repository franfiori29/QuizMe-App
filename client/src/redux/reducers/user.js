import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';

const mutationCompletedQuiz = gql`
	mutation completeQuiz($payload: ID!) {
		completeQuiz(quizId: $payload) {
			completedQuiz {
				_id
			}
		}
	}
`;

export const completeQuiz = createAsyncThunk(
	'user/completeQuiz',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationCompletedQuiz, {
			payload,
		});
		return clientRequest;
	}
);

const queryGetCompletedQuizzes = gql`
	{
		getCompletedQuizzes {
			_id
		}
	}
`;

export const getCompletedQuizzes = createAsyncThunk(
	'user/getCompletedQuizzes',
	async (_, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetCompletedQuizzes);
		return clientRequest;
	}
);

const queryUpdateUser = gql`
	mutation($payload: UserInput) {
		updateUser(userBody: $payload) {
			_id
			firstName
			lastName
			email
			profilePic
			countryCode
			role
		}
	}
`;
export const updateUser = createAsyncThunk(
	'user/update',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryUpdateUser, {
			payload,
		});
		return clientRequest;
	}
);
const userSlice = createSlice({
	name: 'user',
	initialState: {
		info: {},
		token: '',
		completedQuiz: [],
		likedQuiz: [],
	},
	reducers: {
		getUser: (state, { payload }) => {
			state.info = payload;
		},
		setToken: (state, { payload }) => {
			state.token = payload;
		},
		logout: (state) => {
			state.token = '';
			state.info = {};
		},
		updateLikedQuizzes: (state, { payload }) => {
			if (payload.giveLike) {
				state.likedQuiz.push(payload.quizId);
			} else {
				state.likedQuiz = state.likedQuiz.filter(
					(q) => q !== payload.quizId
				);
			}
		},
	},
	extraReducers: {
		[updateUser.fulfilled]: (state, { payload }) => {
			state.info = payload.updateUser;
		},
		[completeQuiz.fulfilled]: (state, { payload }) => {
			state.completedQuiz = payload.completeQuiz.completedQuiz;
		},
		[getCompletedQuizzes.fulfilled]: (state, { payload }) => {
			state.completedQuiz = payload.getCompletedQuizzes;
		},
	},
});

export const {
	getUser,
	setToken,
	logout,
	updateLikedQuizzes,
} = userSlice.actions;

export default userSlice.reducer;

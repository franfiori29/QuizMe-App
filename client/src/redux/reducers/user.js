import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';
import fb from '../../firebase';

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
	},
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
	},
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
		const state = getState();
		const client = getClient(state);
		const clientRequest = await client.request(queryUpdateUser, {
			payload,
		});
		const previousUserProfilePic = state.user.info.profilePic;
		if (previousUserProfilePic.includes('firebasestorage')) {
			fb.storage().refFromURL(previousUserProfilePic).delete();
		}
		return clientRequest;
	},
);
const userSlice = createSlice({
	name: 'user',
	initialState: {
		info: {},
		token: '',
		completedQuiz: [],
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

export const { getUser, setToken, logout } = userSlice.actions;

export default userSlice.reducer;

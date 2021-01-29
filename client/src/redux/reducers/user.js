import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import {
	queryGetCompletedQuizzes,
	queryUpdateUser,
	mutationCompletedQuiz,
	mutationChangePassword,
	mutationChangeEmail,
	queryGetUserQuizzes,
} from './querys/user';
import fb from '../../firebase';

/* --- Async Thunk Actions --- */
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

export const getCompletedQuizzes = createAsyncThunk(
	'user/getCompletedQuizzes',
	async (_, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetCompletedQuizzes);
		return clientRequest;
	},
);

export const updateUser = createAsyncThunk(
	'user/update',
	async (payload, { getState }) => {
		const state = getState();
		const client = getClient(state);
		const clientRequest = await client.request(queryUpdateUser, {
			payload,
		});
		const previousUserProfilePic = state.user.info.profilePic;
		if (previousUserProfilePic?.includes('firebasestorage')) {
			fb.storage().refFromURL(previousUserProfilePic).delete();
		}
		return clientRequest;
	},
);

export const changePassword = createAsyncThunk(
	'user/changePass',
	async ({ currPass, newPass }, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationChangePassword, {
			currPass,
			newPass,
		});
		return clientRequest;
	},
);

export const changeEmail = createAsyncThunk(
	'user/changeEmail',
	async ({ currPass, newMail }, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationChangeEmail, {
			currPass,
			newMail,
		});
		return clientRequest;
	},
);

export const getUserQuizzes = createAsyncThunk(
	'quiz/getUserQuizzes',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetUserQuizzes, {
			payload,
		});
		return clientRequest;
	},
);

/* --- Slice --- */
const userSlice = createSlice({
	name: 'user',
	initialState: {
		info: {},
		token: '',
		completedQuiz: [],
		likedQuiz: [],
		userQuizzes: [],
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
					(q) => q !== payload.quizId,
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
		[changeEmail.fulfilled]: (state, { payload }) => {
			state.info.email = payload.changeEmail;
		},
		[getUserQuizzes.fulfilled]: (state, { payload }) => {
			state.userQuizzes = payload.getUserQuizzes;
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

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getClient } from '@constants/api';
import {
	queryGetCompletedQuizzes,
	queryUpdateUser,
	mutationCompletedQuiz,
	mutationChangePassword,
	mutationChangeEmail,
	mutationActivateUser,
	queryGetUserQuizzes,
	queryGetUsers,
	queryGetUser,
	mutationValidateUser,
	mutationPremiumUser,
	mutationSetNotificationToken,
} from './querys/user';
import fb from '../../firebase';
import { REACT_APP_API } from '@root/env';

/* --- Async Thunk Actions --- */

export const getUser = createAsyncThunk(
	'user/getUser',
	async (_, { getState }) => {
		axios
			.get(`${REACT_APP_API}/auth/me`, {
				headers: {
					Authorization: `Bearer ${getState().user.token}`,
				},
			})
			.then((user) => {
				return user.data;
			});
	},
);

export const getUserById = createAsyncThunk(
	'user/getUserById',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetUser, {
			payload,
		});
		return clientRequest;
	},
);

export const setNotificationToken = createAsyncThunk(
	'user/setNotificationToken',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(
			mutationSetNotificationToken,
			{ token: payload },
		);
		return clientRequest.setNotificationToken;
	},
);

export const getUsers = createAsyncThunk(
	'user/getUsers',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetUsers, {
			payload,
		});
		return clientRequest.getUsers;
	},
);

export const activateUser = createAsyncThunk(
	'user/activateUser',
	async ({ userId, isActive }, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationActivateUser, {
			userId,
			isActive,
		});
		return clientRequest.activateUser;
	},
);

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
	'user/getUserQuizzes',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetUserQuizzes, {
			payload,
		});
		return clientRequest;
	},
);

export const validateUser = createAsyncThunk(
	'user/validateUser',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationValidateUser, {
			payload,
		});
		return clientRequest;
	},
);
export const premiumUser = createAsyncThunk(
	'user/premiumUser',
	async (_, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationPremiumUser);
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
		users: [],
		loadingUsers: false,
		otherUser: {},
	},
	reducers: {
		setUserInfo: (state, { payload }) => {
			state.token = payload.jwt;
			delete payload.jwt;
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
		setNotificationTokenUser: (state, { payload }) => {
			state.info.notificationToken = payload;
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
		[getUsers.pending]: (state) => {
			state.loadingUsers = true;
		},
		[getUsers.fulfilled]: (state, { payload }) => {
			state.loadingUsers = false;
			state.users = payload;
		},
		[getUser.fulfilled]: (state, { payload }) => {
			state.token = payload.jwt;
			delete payload.jwt;
			state.info = payload;
		},
		[getUserById.fulfilled]: (state, { payload }) => {
			state.otherUser = payload.getUser;
		},
		[validateUser.fulfilled]: (state) => {
			state.info.validated = true;
		},
		[premiumUser.fulfilled]: (state) => {
			state.info.premium = true;
		},
	},
});

export const {
	setUserInfo,
	setToken,
	logout,
	updateLikedQuizzes,
	setNotificationTokenUser,
} = userSlice.actions;

export default userSlice.reducer;

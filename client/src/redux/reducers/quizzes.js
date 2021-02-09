import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import {
	mutationUpdateHighscore,
	mutationDestroyQuiz,
	queryAllQuizzes,
	updateLikeRequest,
	quizCreateOne,
	queryGetQuizByCategory,
	queryGetQuizzesBySearchInput,
	queryRandomQuiz,
	queryGtQuizzesByPopularity,
	queryGtQuizzesSuggested,
	queryGetQuiz,
	queryGetFollowingQuizzes,
} from './querys/quizzes';
import { shuffle } from '@utils/shuffle';

/* --- Async Thunk Actions --- */

export const getQuizzes = createAsyncThunk(
	'quiz/getAll',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryAllQuizzes);
		if (clientRequest.getQuizzes && !payload?.notShuffle) {
			clientRequest.getQuizzes = shuffle(clientRequest.getQuizzes);
		}
		return clientRequest;
	}
);

export const destroyQuiz = createAsyncThunk(
	'quiz/destroyQuiz',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationDestroyQuiz, {
			quizId: payload.quizId,
		});
		return clientRequest.destroyQuiz;
	}
);

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

export const createQuiz = createAsyncThunk(
	'quiz/createOne',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(quizCreateOne, { payload });
		return clientRequest;
	}
);
export const getQuiz = createAsyncThunk(
	'quiz/getById',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetQuiz, { payload });
		return clientRequest;
	}
);

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

export const getQuizzesByPopularity = createAsyncThunk(
	'quiz/getQuizzesByPopularity',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGtQuizzesByPopularity, {
			english: payload,
		});
		return clientRequest;
	}
);

export const getSuggestedQuizzes = createAsyncThunk(
	'quiz/getSuggestedQuizzes',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGtQuizzesSuggested, {
			english: payload,
		});
		return clientRequest;
	}
);

export const getFollowingQuizzes = createAsyncThunk(
	'quiz/followingQuizzes',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryGetFollowingQuizzes, {
			english: payload,
		});
		return clientRequest.getFollowingQuizzes;
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
		clearHighscoreBadge: (state) => {
			state.quiz.newHighscore = false;
		},
		clearCurrentQuiz: (state) => {
			state.quiz = {};
		},
	},
	extraReducers: {
		[getQuizzes.fulfilled]: (state, { payload }) => {
			state.quizzes = payload.getQuizzes;
			state.categories = payload.getCategories;
		},
		[getQuiz.fulfilled]: (state, { payload }) => {
			state.quiz = payload.getQuiz;
		},
		[getQuiz.pending]: (state) => {
			state.quiz = {};
		},
		[getQuiz.rejected]: (state) => {
			state.quiz = { error: true };
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
		[getSuggestedQuizzes.fulfilled]: (state, { payload }) => {
			state.quizzes = payload.getSuggestedQuizzes;
		},
		[getFollowingQuizzes.fulfilled]: (state, { payload }) => {
			state.quizzes = payload;
		},
	},
});

export const {
	clearfilteredQuizzes,
	clearHighscoreBadge,
	clearCurrentQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;

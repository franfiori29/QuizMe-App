import { gql } from 'graphql-request';

/* --- Fragments --- */

export const EntireQuizInfo = gql`
	fragment EntireQuizInfo on Quiz {
		_id
		title
		description
		image
		language
		likes
		time
		creatorId {
			_id
			firstName
			lastName
			profilePic
		}
		highScores {
			_id
			user {
				_id
				firstName
				lastName
			}
			score
		}
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
export const CardQuizInfo = gql`
	fragment CardQuizInfo on QuizCard {
		_id
		title
		description
		image
		likes
	}
`;

/* --- Querys --- */

export const queryAllQuizzes = gql`
	{
		getQuizzes {
			...CardQuizInfo
		}
	}
	${CardQuizInfo}
`;

export const queryGetQuizByCategory = gql`
	query($payload: ID!) {
		getQuizByCategory(catId: $payload) {
			...CardQuizInfo
		}
	}
	${CardQuizInfo}
`;

export const queryGetQuiz = gql`
	query($payload: ID!) {
		getQuiz(id: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const queryGetQuizzesBySearchInput = gql`
	query($searchInput: String!, $categoryFilter: String, $page: Int) {
		getQuizzesByInputSearch(
			input: $searchInput
			cat: $categoryFilter
			page: $page
		) {
			quizzes {
				...CardQuizInfo
			}
			hasNextPage
		}
	}
	${CardQuizInfo}
`;

export const queryRandomQuiz = gql`
	{
		getRandomQuiz {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

/*Get quizzes by popularity*/

export const queryGtQuizzesByPopularity = gql`
	query($english: Boolean) {
		searchByPopularity(english: $english) {
			...CardQuizInfo
		}
	}
	${CardQuizInfo}
`;

/*Get quizzes suggested*/

export const queryGtQuizzesSuggested = gql`
	query($english: Boolean) {
		getSuggestedQuizzes(english: $english) {
			...CardQuizInfo
		}
	}
	${CardQuizInfo}
`;

export const queryGetFollowingQuizzes = gql`
	query($english: Boolean) {
		getFollowingQuizzes(english: $english) {
			...CardQuizInfo
		}
	}
	${CardQuizInfo}
`;

/* --- Mutations --- */
export const mutationUpdateHighscore = gql`
	mutation updateHighscore($quizId: ID!, $score: Int!) {
		updateHighscore(quizId: $quizId, score: $score)
	}
`;

export const mutationDestroyQuiz = gql`
	mutation destroyQuiz($quizId: ID!) {
		destroyQuiz(quizId: $quizId)
	}
`;

export const updateLikeRequest = gql`
	mutation updateLike($quizId: ID!, $giveLike: Boolean) {
		updateLike(quizId: $quizId, giveLike: $giveLike) {
			likes
			_id
		}
	}
`;

export const quizCreateOne = gql`
	mutation createQuiz($payload: QuizInput) {
		createQuiz(quiz: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

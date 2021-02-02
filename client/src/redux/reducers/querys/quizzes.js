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

/* --- Querys --- */

export const queryAllQuizzes = gql`
	{
		getQuizzes {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const queryGetQuizByCategory = gql`
	query($payload: ID!) {
		getQuizByCategory(catId: $payload) {
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
				...EntireQuizInfo
			}
			hasNextPage
		}
	}
	${EntireQuizInfo}
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
	{
		searchByPopularity {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
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

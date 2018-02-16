import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const initialReducerState = {
	jokes: {},
	categories: [],
	loading: true
}

const Reducer = (state = initialReducerState, action) => {
	if (!action) return state;

	switch (action.type) {
		case 'SET_CATEGORIES': {
			return { ...state, categories: action.categories }
		}

		case 'SET_JOKES': {

			const jokes = [...action.jokes]

			const newJokes = jokes.reduce((result, item, index, array) => {

				result[item.data.category] = {
					joke: item.data,
					loading: false
				}

				return result
			}, {}) //watch out the empty {}, which is passed as "result"

			return { ...state, jokes: newJokes }
		}

		case 'SET_JOKE': {

			const jokes = { ...state.jokes }
			const newJokes = {
				...jokes,
				[action.category]: {
					joke: action.joke.data,
					isLoading: false
				}
			}
			return { ...state, jokes: newJokes }
		}

		case 'TOGGLE_LOADING': {
			return { ...state, loading: !state.loading }
		}

		case 'TOGGLE_LOADING_JOKE': {
			const jokes = { ...state.jokes }
			const newJokes = {
				...jokes,
				[action.category]: {
					loading: true,
					joke: ''
				}
			}
			return {
				...state,
				jokes: newJokes
			}
		}

		default: {
			return state;
		}
	}
}

export default combineReducers({
	routing: routerReducer,
	Reducer
})
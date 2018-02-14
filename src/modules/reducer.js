import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const initialReducerState = {
	jokes: {},
	categories: []
}

const Reducer = (state = initialReducerState, action) => {
	if (!action) return state;

	switch (action.type) {
		case 'SET_CATEGORIES': {
			debugger;
			return { ...state, categories: action.categories }
		}

		case 'SET_JOKE': {
			const jokes = { ...state.jokes }
			const newJokes = {
				...jokes,
				[action.category]: action.joke
			}

			return { ...state, newJokes }
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
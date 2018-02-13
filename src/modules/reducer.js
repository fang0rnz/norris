import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const initialReducerState = {
	joke: '',
	categories: []
}

const Reducer = (state = initialReducerState, action) => {
	if (!action) return state;

	switch (action.type) {
		case 'SET_CATEGORIES': {
			return { ...state, categories: action.categories }
		}

		case 'SET_JOKE': {
			return { ...state, joke: action.joke }
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
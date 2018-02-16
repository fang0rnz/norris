import {getCategories, getJoke} from '../api'

const SET_CATEGORIES = 'SET_CATEGORIES'
const SET_JOKES = 'SET_JOKES'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const SET_JOKE = 'SET_JOKE'
const TOGGLE_LOADING_JOKE = 'TOGGLE_LOADING_JOKE'

export function setCategories() {
  return async (dispatch) => {
		const response = await getCategories()
		const categories = response.data

		dispatch({
			type: SET_CATEGORIES,
			categories 
		})
		
		const jokeRequests = categories.map(category => {
			return getJoke(category)
		})
		
		const jokes = await Promise.all(jokeRequests)
		
		dispatch({
			type: SET_JOKES,
			jokes 
		})

		dispatch({
			type: TOGGLE_LOADING
		})

  }
}

export function setJoke(category) {
	return async (dispatch) => {
		dispatch({
			type: TOGGLE_LOADING_JOKE,
			category
		})
		
		const joke = await getJoke(category)

		dispatch({
			type: SET_JOKE,
			category
		})

		dispatch({
			type: TOGGLE_LOADING_JOKE,
			category
		})
	}
}

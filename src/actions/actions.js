import {getCategories, getJoke} from '../api'

const SET_CATEGORIES = 'SET_CATEGORIES'
const SET_JOKES = 'SET_JOKES'

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

  }
}

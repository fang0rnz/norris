import {getCategories} from '../api'

const SET_CATEGORIES = 'SET_CATEGORIES'

export function setCategories() {
  return async (dispatch) => {
		const response = await getCategories()
		console.log(response)
		dispatch({
			type: SET_CATEGORIES,
			categories : response.data
		}) 
  }
}

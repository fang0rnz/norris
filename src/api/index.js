import axios from 'axios'

const norrisApi = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/',
  timeout: 6000,
  validateStatus: function(status) {
    return (
      (status >= 200 && status <= 299) ||
			(status >= 400 && status <= 499) || 
			(status >= 500 && status <= 599)
    )
  },
})

export function getCategories() {
  return norrisApi.get('categories')
}

export function getJoke(category) {
  return norrisApi.get('random?category='+category)
}
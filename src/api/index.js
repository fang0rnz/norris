import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.chucknorris.io/jokes/',
})

export const getCategories = () => api.get('categories')

export const getJoke = (category) => api.get(`random?category=${category}`)
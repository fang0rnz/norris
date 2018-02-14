import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as NorrisApi from './api'

class App extends Component {
	constructor() {
		super()
		this.state = {
			categories: [],
			joke: ''
		}
	}

	componentWillMount() {
		NorrisApi.getCategories().then((res) => {
			this.setState({ categories: res.data })
		})
	}

	printJoke(category) {
		NorrisApi.getJoke(category).then(
			(response) => {
				this.setState({ joke: response.data.value })
			}
		)
	}

	render() {
		console.log(this.state)
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Norris</h1>
					{this.state.joke}
				</header>
				{this.state.categories.map((category, i) => <p onClick={() => this.printJoke(category)} key={i}>{category}</p>)}
			</div>
		);
	}
}

export default App;

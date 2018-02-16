import React from 'react'
import { connect } from 'react-redux'
import {
	Container, Dimmer, Loader
} from 'semantic-ui-react'
import Masonry from 'react-masonry-component'
import Quote from './Quote'

import * as Action from '../actions/actions'

const style = {
	h1: {
		marginTop: '1em',
	},
	h2: {
		margin: '4em 0em 2em',
	},
	h3: {
		marginTop: '2em',
		padding: '2em 0em',
	},
	last: {
		marginBottom: '300px',
	},
	chuckImage: {
		width: '100%',
		paddingRight: '15px'
	},
	Card: {
		width: '25%'
	}
}

const masonryOptions = {
	gutter: 15
}
class Landing extends React.Component {

	componentDidMount() {
		this.props.setCategories();
	}

	renderCategories = () => this.props.categories.map((category) => {
		const data = this.props.jokes[category]
		let quote = ''
		if (data) {
			let isLoading = this.props.jokeLoading(category) || false
			quote = data.joke.value
			const newJoke = () => this.props.newJoke(category)
			const image = () => 'https://source.unsplash.com/200x120/?' + category + '&' + JSON.stringify(new Date());
			return (
				<Quote
					image={image()}
					newJoke={newJoke}
					key={category}
					style={style.Card}
					quote={quote}
					category={category}
					isLoading={isLoading}
				/>
			)
		}
		return null
	})

	render() {
		return (
			<React.Fragment>
				<style>{`
					.brand {
						padding: 30px 0;
						margin: 0 auto;
						text-align: center;
						font-size: 40px;
					}
					.brand span:first-child {
						font-weight: 600;
					}
					.brand span:nth-child(2) {
						color: #999;
					}
					.brand span:last-child {
						color: #df5772;
					}
				`}</style>
				<div className='brand'>
					<span>Norris</span>
					<span>nator </span>
					<span>2000</span>
				</div>
				<Container>
					<img src='chuck.png' style={style.chuckImage} />
					<div>
						{
							this.props.loading ?
								<Dimmer active inverted>
									<Loader inverted>Loading</Loader>quote
							</Dimmer>
								:
								<Masonry
									options={masonryOptions}
								>
									{this.renderCategories()}
								</Masonry>
						}
					</div>
				</Container>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.Reducer.categories,
		jokes: state.Reducer.jokes,
		loading: state.Reducer.loading,
		jokeLoading: (category) => state.Reducer.jokes[category].loading
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		newJoke: (category) => {
			dispatch(Action.setJoke(category))
		},
		setCategories: () => {
			dispatch(Action.setCategories())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing)

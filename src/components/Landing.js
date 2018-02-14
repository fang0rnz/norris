import React from 'react'
import { connect } from 'react-redux'
import {
	Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import Quote from './Quote';

import * as Action from '../actions/actions'

const style = {
	h1: {
		marginTop: '3em',
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
}

class Landing extends React.Component {

	componentDidMount(){
		this.props.setCategories();
	}

	renderCategories = () => this.props.categories.map((category) => {
		
		const data = this.props.jokes[category]
		let image = ''
		if (data)
		image = data.icon_url || ''
		return (
			<Quote 
				image={image} 
				quote='asdasdas' 
				category={category} 
			/>
		)
	})

	render() {
		return (
			<React.Fragment>
				<Header
					as='h1'
					content='Norrisnator 2000'
					style={style.h1}
					textAlign='center'
				/>
				<Container>
					<Item.Group divided>
						{this.renderCategories()}
					</Item.Group>
				</Container>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
		categories: state.Reducer.categories,
		jokes: state.Reducer.jokes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCategories: () => {
      dispatch(Action.setCategories())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing)

import React from 'react'
import { connect } from 'react-redux'
import {
	Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import Quote from './Quote';


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

	componentDidMount() {

	}

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
						<Quote image='asd' quote='asdasdas' category='DONTKNOW' />
					</Item.Group>
				</Container>
			</React.Fragment>
		)
	}
}



export default Landing

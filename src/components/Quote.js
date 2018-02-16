import React from 'react'
import { Card, Image, Button, Icon, Dimmer, Loader } from 'semantic-ui-react'

const styles = {
	Card: {
		width: 'calc(25% - 15px)',
		marginTop: '15px'
	},
	CardImage: {
		width: '100%',
		minHeight: '120px',
		height: 'auto'
	}
}

class Quote extends React.PureComponent {
	render() {
		const { image, quote, category } = this.props
		return (
			<Card style={styles.Card} fluid>
				{
					this.props.isLoading ?
					<Dimmer active inverted>
						<Loader inverted>Loading</Loader>
					</Dimmer>
					:
					<React.Fragment>
						<Image style={styles.CardImage} src={'https://source.unsplash.com/200x120/?' + category}/>
						<Card.Content>
							<Card.Header>
								{category}
							</Card.Header>
							<Card.Description>
							{quote}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className='ui buttons'>
								<Button basic color='green'>New quote</Button>
							</div>
						</Card.Content>
					</React.Fragment>
				}
			</Card>
		)
	}
}

export default Quote
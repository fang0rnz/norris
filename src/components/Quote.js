import React from 'react'
import { Item, Button, Icon } from 'semantic-ui-react'

class Quote extends React.PureComponent {
	render() {
		const { image, quote, category } = this.props
		return (
			<Item>
				<Item.Image src={image} />
				<Item.Content>
					<Item.Header as='a'>{category}</Item.Header>
					<Item.Meta>
						<span>Date</span>
						<span>Category</span>
					</Item.Meta>
					<Item.Description>
						{quote}
					</Item.Description>
					<Item.Extra>
						<Button primary floated='right'>
							Primary
						<Icon name='right chevron' />
						</Button>
					</Item.Extra>
				</Item.Content>
			</Item>
		)
	}
}

export default Quote
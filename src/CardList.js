import React, {Component} from 'react';
import CreateProfile from './CreateProfile';
import Card from './Card';

class CardList extends Component {
   render(){
   	return (
		<div>
			{this.props.profiles.map((user, i) => {
				return (
					<Card
						key={i}
						id={this.props.profiles[i].id}
						name={this.props.profiles[i].name}
						description={this.props.profiles[i].description}
					/>
				);
			})}
		</div>
	);
};
}
export default CardList;



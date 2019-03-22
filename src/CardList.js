import React, {Component} from 'react';
import CreateProfile from './CreateProfile';
import Card from './Card';

class CardList extends Component {
   render(){
   	const {profiles} = this.props;
   	return (
		<div>
			{profiles.map((user, i) => {
				return (
			
					<Card
						key={i}
						name={user.name}
						description={user.description}
						image={user.image}
					/>

				);
			})}
		</div>
	);
};
}
export default CardList;



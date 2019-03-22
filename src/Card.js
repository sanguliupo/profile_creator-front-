import React, {Component} from 'react';


class Card extends Component {
   render(){
   	const {name, description, image} = this.props;
   	return (
			<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<img alt="pictures" src={`${image}`} width="200"/>
				<div>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
		);
   }
};

export default Card;

import React, {Component} from 'react';


class Card extends Component {
   render(){
   	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="pictures" src={`https://robohash.org/${this.props.id}?200x200`} />
			<div>
				<h2>{this.props.name}</h2>
				<h2>{this.props.description}</h2>
				
			</div>
		</div>
	);
   }
	
};

export default Card;

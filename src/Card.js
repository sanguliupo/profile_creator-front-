import React, {Component} from 'react';


class Card extends Component {
   render(){
   	const {name, description, image} = this.props;
   	return (
			<div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 card">
				<div className="imageContainer">
					<img alt="pictures" src={`${image}`}/>
				</div>
				<div className="contentContainer">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
		);
   }
};

export default Card;

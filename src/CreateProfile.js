import React, { Component } from 'react';
import CardList from './CardList';

const HEADER_TYPE = {
	'Content-Type': 'application/json'
};

class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			imageUrl: '',
		}
	}

	onSubmit = async (event) => {
		event.preventDefault();
		const {name, description, imageUrl} = this.state;
		const response = await fetch('https://peaceful-beyond-57215.herokuapp.com/profile', {
			method: 'POST',
			headers: HEADER_TYPE,
			body: JSON.stringify({ name, description, imageUrl})
		});
		const responseText = await response.text();
		const profileResponse = JSON.parse(responseText);
		this.setState({ 			
			name: '',
			description: '',
			imageUrl: '', 
		});

		this.props.fetchProfiles();
	}

	render() {
		const {name, description, imageUrl} = this.state;
		return (
			<div >
				<form className="bg-light-pink dib br4 pa3 ma3 grow bw2 tc topBar">
					<p className="athelas f5 ma2 commentbox">
						Create your profile
					</p>
					<input
						className="commentbox inputField"
						type="text"
						placeholder="Your name"
						onChange={(event)=> {
							this.setState({name: event.target.value});
						}}
						value={name}
					/>
					<input
						type="text"
						className="commentbox inputField"
						placeholder="Description"
						onChange={(event)=> {
							this.setState({description: event.target.value});
						}}
						value={description}
					/>
					<input
						type="text"
						className="commentbox inputField"
						placeholder="An URL of your photo"
						onChange={(event)=> {
							this.setState({imageUrl: event.target.value});
						}}
						value={imageUrl}
					/>
					<button
						type="submit"
						className="pa1 dib helvetica f5 ma2 br-pill"
						onClick={this.onSubmit.bind(this)}
					>
					Submit
					</button>
				</form>
			</div>
		);
	}
}

export default CreateProfile;

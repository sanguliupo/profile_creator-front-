import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import CardList from './CardList';

class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			pictures:[],
			user: {
        		name: "Default",
        		description: "",
        		pictures:[]
      		}
		};
		this.onDrop = this.onDrop.bind(this);
	}

	onNameChange = (event) => {
		this.setState({
			name: event.target.value
		});
	};

	onDescriptionChange = (event) => {
		this.setState({
			description: event.target.value
		});
	};

	onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    onSubmit(){
    	fetch('http://localhost:3000/register',{
    		method: 'post',
    		headers:{'Content-Type': 'application/json'},
    		body: JSON.stringify({
    			name: this.state.name,
    			description: this.state.description,
    			pictures: this.state.pictures
    		})
    	})
    		.then(response => response.json())
    		.then(user=>{
    			this.loadUser(user);
    		})
    }

    loadUser = (data) => {
		this.setState({user:{
			name: data.name,
			description: data.description,
			pictures:data.pictures
		}})
	}



	render() {
	
		return (
			<div >
				<form className=" bg-light-pink dib br4 pa3 ma3 grow bw2 tc topBar">
					<p className="athelas f5 ma2 commentbox">
						Create your profile
					</p>
					<input
						className="athelas f5"
						type="text"
						placeholder="Your name"
						onChange={this.onNameChange}
						value={this.state.name}
					/>

					<input
						type="text"
						className="commentbox"
						placeholder="Description"
						onChange={this.onDescriptionChange}
						value={this.state.description}
					/>

					<ImageUploader
				        withIcon={true}
				        buttonText='Choose a profile picture'
				        onChange={this.onDrop}
				        imgExtension={['.jpg', '.gif', '.png', '.gif']}
				        maxFileSize={5242880}
        			/>
					<button
						type="submit"
						className="pa1 dib helvetica f5 ma2 br-pill"
						onClick={e => {
							e.preventDefault();
							this.onSubmit();
						}}
					>
						Submit
					</button>
				
				</form>
				{/*<CardList name={this.state.user.name}
						  description={this.state.user.description}
						  pictures={this.state.user.pictures}
				/>*/}
			</div>
		);
	}
}

export default CreateProfile;

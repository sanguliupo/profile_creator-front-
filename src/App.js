import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';
import CardList from './CardList';
import CreateProfile from './CreateProfile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles:[],
    };
    
  }

  fetchProfiles = () => {
    fetch('/profiles')
      .then(response => response.json())
      .then(users => this.setState({ profiles: users }));
  }

  componentDidMount() {
    this.fetchProfiles();
  }

  render() { 
    const {profiles} = this.state;
    console.log('profiles', profiles)
    if(profiles.length > 0) {
      return (
        <div className="App">
          <Navigation />
          <CreateProfile fetchProfiles={this.fetchProfiles} />
          <CardList profiles={profiles}/ >
        </div>
      );

    } else {
      return (
        <div className="App">
         Loading...
        </div>
      );

    }
  }
}

export default App;

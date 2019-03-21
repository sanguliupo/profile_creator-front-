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

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ profiles: users }));
  }

  render() {  
    return (
      <div className="App">
         <Navigation />
         <CreateProfile />
         <CardList profiles={this.state.profiles}/ >
      </div>
    );
  }
}

export default App;

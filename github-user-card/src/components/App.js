import React from 'react';
import '../styles/App.css';
import axios from 'axios'
import User from './User'
import SearchBar from './SearchBar'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      followers: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/EdwardEJ')
      .then(res => {
        this.setState({ user: res.data })
        console.log(this.state.user)
      })
      .catch(err => {
        console.log(err)
      })
  }



  render() {
    return (
      <div className="App" >
        <SearchBar />
        <User user={this.state.user} />
      </div>
    );
  }
}


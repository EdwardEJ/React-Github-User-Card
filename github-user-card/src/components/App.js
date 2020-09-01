import React from 'react';
import '../styles/App.css';
import axios from 'axios'
import User from './User'
import SearchBar from './SearchBar'
import UserFollowers from './UserFollowers'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/EdwardEJ')
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios.get('https://api.github.com/users/EdwardEJ/followers')
        .then(res => {
          this.setState({ followers: res.data })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }



  render() {
    return (
      <div className="App" >
        <SearchBar />
        <User user={this.state.user} />
        {this.state.followers.map(follower => {
          return <UserFollowers followers={follower} />
        })}
      </div>
    );
  }
}


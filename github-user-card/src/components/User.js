import React from 'react'
import '../styles/User.css'

export default function User(props) {

  const {
    user
  } = props



  return (
    <section className='users-container'>
      <img src={user.avatar_url} alt='github avatar' />
      <div className='user-info'>
        <h3>Name: {user.name}</h3>
        <p>Location: {user.location}</p>
        <p>Following: {user.following}</p>
        <p>Followers: {user.followers}</p>
      </div>
    </section>
  )
}
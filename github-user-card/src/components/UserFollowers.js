import React from 'react'
import '../styles/Followers.css'

export default function UserFollowers(props) {

  const { followers } = props

  return (
    <section className='followers-container'>
      <img src={followers.avatar_url} alt='github avatar' />
      <div className='followers-info'>
        <h3>Name: {followers.name}</h3>
        <p>Location: {followers.location}</p>
        <p>Following: {followers.following}</p>
        <p>Followers: {followers.followers}</p>
      </div>
    </section>
  )
}
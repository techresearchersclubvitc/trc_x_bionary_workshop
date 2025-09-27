import React from 'react'
import AddToCart from '../components/AddToCart.jsx'

const UsersPage = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return (
    <div>
      {new Date().toISOString()}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      UsersPage
      <ol>
      {users.map((user)=>{
        return <li key={user.id}>{user.name}</li>
      })}
      </ol>
    </div>
  )
}

export default UsersPage
import React from 'react'
import {auth} from './fire-base'

function Home() {
  return (
    <div><h1>Welcome to Home Page</h1>
    <button onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Home
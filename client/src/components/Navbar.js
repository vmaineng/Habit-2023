import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/signin">Sign Up</Link>
        <br/>
        <Link to="/login">Log In</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
  return (
   <nav>
     <h1>Protected Router</h1>
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/setting">Settings</Link></li>
     </ul>
   </nav>
  )
}

export default Nav
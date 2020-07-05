import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/countries/create">Create an entry</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <span
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/login");
        }}
      >
        Logout
      </span>
      </nav>
    )
  }
}

export default NavBar
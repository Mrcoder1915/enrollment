import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header style={{width: "100%", height: "80px", backgroundColor: "red"}}>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">about</Link></li>
          <li><Link to = "/contact">contact</Link></li>
        </ul>
    </header>
  )
}

export default Header

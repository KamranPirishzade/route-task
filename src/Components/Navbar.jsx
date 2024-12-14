import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function 
() {
  return (
    <div className='nav'>
        <ul>
            <li>
                <Link className='link' to="/">About</Link>
            </li>
            <li>
                <Link className='link' to="/contact">Contact</Link>
            </li>
            <li>
                <Link className='link' to="/projects">Projects</Link>
            </li>
        </ul>
    </div>
  )
}

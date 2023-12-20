import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-31 h-10 rounded-lg p-2 font-medium ">
        <p>🦖 Shreya Malik</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={( {isActive})=> isActive ? 'text-blue-500':'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={( {isActive})=> isActive ? 'text-blue-500':'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
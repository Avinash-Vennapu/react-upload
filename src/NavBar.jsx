import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className='container'>
      <aside className='mini'>
        <h1>LOGO</h1>
      </aside>
      <aside className='list'>
        <ul>
          <NavLink to="/"><li>HOME</li></NavLink>
          <NavLink to="/ViewAll"><li>viewall</li></NavLink>
          
        </ul>
      </aside>
    </nav>
    </>
  )
}

export default NavBar
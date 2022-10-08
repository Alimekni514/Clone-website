import React from 'react'
import Menu from './Menu'
import TopBar from './TopBar'

function NavBar() {
  return (
    <div className='NavBar'>
        <TopBar/>
        <Menu/>
    </div>
  )
}

export default NavBar
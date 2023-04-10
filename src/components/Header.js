import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <h2 className="header-content">To-do List</h2>
      <a href='#' className="header-content">Home</a>
      <a href='#' className="header-content">About</a>
    </div>
  )
}

export default Header
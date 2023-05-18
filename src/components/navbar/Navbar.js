import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navLink = document.getElementById("nav-link");
    
    navMenu.addEventListener('click', () => {
      navLink.classList.toggle('show-lk');
    })
  }, [])
  
  return (
    <div className="nav-bar">
      <div className="logo">LOGO</div>
      <div className="nav-link show-lk" id='nav-link'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/product' className='link'>Products</Link>
        <Link to='/' className='link'>Diet Plan</Link>
        <Link to='/' className='link'>Profile</Link>
      </div>
      <div className="nav-menu" id='nav-menu'>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Navbar
import React, {useState} from 'react'
import './Navbar.css'
import logo from "../Assats/MARHA.png"
import manu from "../Assats/menu.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) :setMobileMenu (true);
  }
  return (
    <nav  className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Service'>Service</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul>
        <img src={manu} alt="" className='menu' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar

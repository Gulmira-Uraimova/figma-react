import React from 'react'
import './Header.css'
import loupe from '../../assets/loupe 1.png'
import group from '../../assets/Group.png'


const Header = () => {
  return (
    <nav className='header'>
        <h1>DudeShape</h1>
        <ul className='header__ul'>
            <li>Home</li>
            <li>About</li>
            <li class="header__a"onclick=''><a href="../features" style={{textDecoration: 'none' }}>Features</a></li>
            <li>Contact</li>
        </ul>
        <div>
           <img src={loupe} alt="error" className=''/>
           <img src={group} alt="error" /> 
        </div>

        
    </nav>
  )
}

export default Header
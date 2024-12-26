import React from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate =useNavigate();

    const handleNavigate=()=> {
        navigate("/")
    }
    return (
        <div className='navbar'>
            <img className='main-logo' src="https://himovies.to/images/group_1/theme_1/logo.png?v=0.1" alt="Hi movies" />
             <ul className='ul' type='none'>
              <li className='ml-[-500px]'><Link to="/">HOME</Link></li>
              <li><Link to="/movies">MOVIES</Link></li>
             </ul>
        
            <button onClick={handleNavigate} className='icon-one'>Sign Out</button>
        </div>
    )
}

export default NavBar
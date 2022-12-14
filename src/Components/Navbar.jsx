import {Link, NavLink} from 'react-router-dom'
import React, {useState} from 'react'
import {links} from './data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

import Logo from '../assets/images/logo.png'

// import Logo from '../images/logo.png'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <div>
        <nav>
            <div className="container nav_container">
                <Link to='/' className='logo'onClick={()=>setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                    {links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={()=>setIsNavShowing(prev => !prev)}> {name} </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <button className='nav_toggle-btn' onClick={()=>setIsNavShowing(prev => !prev)}>
                    { isNavShowing ? <MdOutlineClose/> : <GoThreeBars/> }
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
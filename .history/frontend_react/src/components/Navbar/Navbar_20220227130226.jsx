import React from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants'
import './Navbar.scss'
import { useState } from 'react';
const Navbar = () => {
    state
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}> 
                    <a href={`#${item}`}>{item}</a> 
                    <div />
                </li>    
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)}/>
        </div>
    </nav>
  )
}

export default Navbar
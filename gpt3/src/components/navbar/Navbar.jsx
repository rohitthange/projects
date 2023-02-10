import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css';

/* BEM: BEM stands for Block Element Modifier. 
It is a design methodology that helps in creating reusable components 
and code sharing in front-end development. It is a system of methods 
that help in writing HTML and CSS. */ 
const Menu = () => (
        <>
        <p><a href='#home'/>Home</p>
        <p><a href='#whatgpt3'/>What is GPT3?</p>
        <p><a href='#possibility'/>Open AI</p>
        <p><a href='#features'/> Case Studies</p>
        <p><a href='#blog'/>Library</p>
        </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
      <div className='gpt3__navbar-links_logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='gpt3__navbar-links_container'>
        <Menu />
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Navbar
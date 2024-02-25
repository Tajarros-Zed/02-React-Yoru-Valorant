import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

// BEM -> Block Element Modifier

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#biography">Biography</a></p>
    <p><a href="#appearance">Appearance</a></p>
    <p><a href="#abilities">Abilities</a></p>
    <p><a href="#article">Article</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='fakeout__navbar'>

      <div className='fakeout__navbar-links'>
        <div className='fakeout__navbar-links__logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='fakeout__navbar-links__container'>
          <Menu />
        </div>
      </div>

      <div className='fakeout__navbar-sign'>
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>

      <div className='fakeout__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='fakeout__navbar-menu__container scale-up-center'>
            <div className='fakeout__navbar-menu__container-links'>
              <Menu />
              <div className='fakeout__navbar-menu__container-links-sign'>
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
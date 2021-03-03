import React, { useState } from 'react';
import Menu from '../menu/Menu';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from 'react-icons/im'

import './Header.scss';

function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false) 
  
  function activateMobileMenu() {
    setActiveMobileMenu(!activeMobileMenu)
  }
  const menuIcon = activeMobileMenu ? <ImCross className="menu-icon"/> : <GiHamburgerMenu className="menu-icon"/>;
  
  return(
    <div className="bg-dark header-wrapper">
      <div className="header container">
        <h2 className="logo">E<span className="logo_active">B</span></h2>
        <Menu activeMobileMenu={activeMobileMenu} activateMobileMenu={activateMobileMenu}/>   
        <div className="menu-toggler" onClick={() => activateMobileMenu()}>{menuIcon}</div>
      </div>
    </div>
  )
}

export default Header;
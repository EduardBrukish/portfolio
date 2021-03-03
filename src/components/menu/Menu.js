import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { menuSections } from '../../data/data';

import './Menu.scss';

function Menu({activeMobileMenu, activateMobileMenu}) {
  const [activeMenuItem, setActiveItem] = useState('main')
  const activeMenuClasses = activeMobileMenu ? 'navigation-wrapper_active' : '';

  function handleEvent(activeItem) {
    setActiveItem(activeItem)
    activateMobileMenu()
  } 

  const menuItems = menuSections.map((item) => {
    const activeClass = (activeMenuItem === item.section) ? "navigation__link_active" : "";
    return(  
      <li className="navigation__item" key={item.id}>
        <Link to={item.path} onClick={(event) => handleEvent(event.target.innerText.toLowerCase())} className={`navigation__link ${activeClass}`}>
          {item.section}
        </Link>
      </li>
    )
  })

  return(
    <nav className={`navigation-wrapper ${activeMenuClasses}`}>
        <ul className="navigation">
          {menuItems}
        </ul>
    </nav>
  )
}

export default Menu

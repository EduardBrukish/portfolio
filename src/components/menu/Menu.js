import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { menuSections } from '../../data/data';

import './Menu.scss';

function Menu() {
  const [activeItem, setActiveItem] = useState('/');
  const menuItems = menuSections.map((item) => {
    const routerPath = (item.section === 'main') ? '/' : '/' + item.section;
    let classes = 'nav-link nav-text';
    if(item.section === 'main' && activeItem ==='/' ) {
      classes += ' active'
    } else if( item.section === activeItem ) {
      classes += ' active'
    }

    function eventHandler(menuName) {
      const newActiveMenuItem = menuName.toLowerCase();
      if(newActiveMenuItem === 'main') {
        setActiveItem('/')
      } else {
        setActiveItem(newActiveMenuItem)
      }
    }

    return(  
      <li className="nav-item" key={item.id} onClick={(event)=> eventHandler(event.target.innerText)}>
        <Link to={routerPath} className={ classes }>
          {item.section}
        </Link>
      </li>
    )
  })

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {menuItems}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
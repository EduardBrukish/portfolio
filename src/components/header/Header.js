import React from 'react';
import Menu from '../menu/Menu'

import './Header.scss';

function Header() {
  return(
    <div className="bg-dark">
      <div className="header container">
        <h2>EB</h2>
        <Menu />  
      </div>
    </div>
  )
}

export default Header;
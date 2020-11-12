import React from 'react';
import { SiUpwork, SiGithub } from "react-icons/si";

import './Main.scss'

function Main() {
  return(   
    <div className="main-wrapper">
      <h1 className="main-title">Eduard Brukish</h1>
      <h2 className="main-description">Front-end developer</h2>
      <div>
        <a href="https://www.upwork.com/freelancers/~01523d8e8ba7509888?s=1110580755057594368" target="_blank">
          <SiUpwork className="link-icon"/>
        </a>
        <a href="https://github.com/EduardBrukish" target="_blank">
          <SiGithub className="link-icon"/>
        </a>
      </div>
    </div>
  );
}


export default Main
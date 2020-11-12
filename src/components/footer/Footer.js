import React from 'react';
import { SiUpwork, SiGithub } from "react-icons/si";

import './Footer.scss';

function Footer() {
  return(
    <div className="footer">
      <div className="bg-dark d-flex justify-content-between align-items-center p-2">
        <h5 className="footer-title">© Eduard Brukish</h5>
        <div>
          <a href="https://www.upwork.com/freelancers/~01523d8e8ba7509888?s=1110580755057594368" target="_blank">
            <SiUpwork className="link-icon"/>
          </a>
          <a href="https://github.com/EduardBrukish" target="_blank">
            <SiGithub className="link-icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
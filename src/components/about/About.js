import React from 'react';
import Footer from '../footer/Footer';
import photo from '../../assets/img/Brukish.jpg'
import './About.scss'

function About() {
  return(
    <div className="container">
      <h2>About</h2>
      <div className="bg-dark container d-flex flex-column flex-md-row just-content-center align-items-center align-items-md-start p-3 ">
        <p className="about-description">Hello! I’m Eduard - a front-end developer from Belarus with a Bachelor’s degree in Computer Science. 
          I build complex web applications and websites using the latest tools. My favorite framework is React. 
          You can know more about my skills and works on the "Skills" and "Works" pages.
        </p>
        <img className="photo" src={photo} alt="Eduard Brukish photo"></img>
      </div>
      <Footer />
    </div>
  );
}

export default About
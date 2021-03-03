import React from 'react';
import SkillCard from '../skill-card/SkillCard';
import Footer from '../footer/Footer';

import ResponsiveSlider from '../common/slider/ResponsiveSlider'
import { stek } from '../../data/data'

import './Skills.scss';

function Skills() {
  const currentStek = stek.map((skill) => {
    return <SkillCard 
              technology={skill.name} 
              level={skill.level} 
              description={skill.description}
              key={skill.id}/>
  })

  return(   
    <div className="container skills">
      <h2>Skills</h2>
      <ResponsiveSlider content={currentStek}/>
      <Footer />
    </div>
  );
}

export default Skills
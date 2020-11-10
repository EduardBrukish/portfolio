import React from 'react';
import SkillCard from '../skill-card/SkillCard';
import stek from '../../data/data'

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
    <div className="container">
      <h2>Skills</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {currentStek}
      </div>
    </div>
  );
}

export default Skills
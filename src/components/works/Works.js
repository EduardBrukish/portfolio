import React from 'react';
import WorkCard from '../work-card/WorkCard';
import Footer from '../footer/Footer';
import { works } from '../../data/data';

import './Works.scss';

function Works() {
  const currentWorks = works.map(work => {
    return <WorkCard title={work.name}
                     description={work.description}
                     linkPath={work.link}
                     features={work.features}
                     key={work.id}/>
  });
  
  return(   
    <div className="container">
      <h2>Works</h2>
      <div className="works-wrapper">
        {currentWorks}
      </div>
      <Footer />
    </div>
  );
}

export default Works
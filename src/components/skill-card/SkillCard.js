import React, { useState, useCallback} from 'react';
import ReactCardFlip from 'react-card-flip';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './SkillCard.scss';

function SkillCard({technology, level, description}) {
  const [isFlipped, changeFlip] = useState(false);
  const handleClick = useCallback((event) => {
    event.preventDefault()
    changeFlip(!isFlipped)
  })
  const percentage = level;

  return(
    <div className="card card-skill">
      <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedFrontToBack={1.0}
      flipSpeedBackToFront={1.0}
      >
      <div key="front" onClick={handleClick}>
        <div>
          <h2 className="skill-title">{technology}</h2>
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + `/img/skills/${technology}.svg`} className="skill-card_image"/>
          </div>
        </div>
      </div>

      <div key="back" onClick={handleClick}>
        <div>
          <h2 className="skill-title_back">{technology}</h2>
          <p>
            {description}
          </p>
          <h4>Proficiency level</h4>
          <div className="progress-wrapper">
            <CircularProgressbar 
              value={level} 
              maxValue={ 100 }
              text={`${percentage}%`}/>
          </div>
        </div>
      </div>
      </ReactCardFlip>
    </div>
  )
}

export default SkillCard
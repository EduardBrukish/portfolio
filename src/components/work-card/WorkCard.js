import React, { useState, useCallback} from 'react';
import ReactCardFlip from 'react-card-flip';

import './WorkCard.scss';

function WorkCard({title, description, linkPath, features}) {
  const [isFlipped, changeFlip] = useState(false);
  const handleClick = useCallback((event) => {
    if(event.target.classList.contains('work-link')) return
    event.preventDefault()    
    changeFlip(!isFlipped)
  })
  const imagePath = process.env.PUBLIC_URL + `/img/works/${title}.webp`;

  const workFeatures = features.map((feature, index) => {
    return( <li className="features__item" key={index}> {feature} </li>)
  }) 

  return(
    <div className="card card-work">
      <ReactCardFlip className="front"
      isFlipped={isFlipped}
      flipSpeedFrontToBack={1.0}
      flipSpeedBackToFront={1.0}
      >
      <div key="front" className="front" onClick={handleClick}>
        <div className="image-wrapper" style={{
          backgroundImage: `url('${imagePath}')`
        }}>
        </div>
      </div>

      <div key="back" className="back" onClick={handleClick}>
        <div className="back">
          <h3 className="work-title_back">{title}</h3>
          <p>
            {description}
          </p>
          <div className="d-flex flex-column">
            <div>
              <p>Main features of the project</p>
              <ul className="features">
                {workFeatures}
              </ul>
            </div>
          <a className="work-link" href={ linkPath } target="_blank" rel="noreferrer">See original</a>
          </div>
        </div>
      </div>
      </ReactCardFlip>
    </div>
  )
}

export default WorkCard
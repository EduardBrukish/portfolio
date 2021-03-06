import React from 'react';
import Particles from 'react-particles-js';

import './Particles.scss';

function ParticlesBackground() {
  return(
    <Particles
		canvasClassName="particles"
		width="100%"
		height="100%"
    params={{
	    "particles": {
	        "number": {
	            "value": 80,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.3
	        },
	        "size": {
	            "value": 1.1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 2,
	                "opacity_min": 0.1
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
  )
}

export default ParticlesBackground
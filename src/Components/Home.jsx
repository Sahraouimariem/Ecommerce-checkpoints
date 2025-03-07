import Herosection from './Herosection';
import Testimonals from './Testimonals'
import React, { useEffect, useState } from 'react'

function Home() {
  const [slidePos, setSlidePos] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);
  
useEffect(() => {
   // Auto slide for the hero slider
   const interval = setInterval(() => {
    setSlidePos((prevPos) => (prevPos + 1) % 3); // Loop through 3 slides
  }, 7000);

  setAutoSlideInterval(interval);

  return () => clearInterval(interval); // Cleanup the interval
}, [])

const slideNext = () => {
  setSlidePos((prevPos) => (prevPos + 1) % 3); // Loop through 3 slides
};

const slidePrev = () => {
  setSlidePos((prevPos) => (prevPos === 0 ? 2 : prevPos - 1)); // Loop through 3 slides
};

  return (
    <div>
    <div style={{height:"100%",paddingTop:"4rem",width:"100%"}}>
      
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="hero-slider" data-hero-slider="">
          {[1, 2, 3].map((item, index) => (
            <li
              key={index}
              className={`slider-item ${index === slidePos ? 'active' : ''}`}
              data-hero-slider-item=""
            >
              <div className="slider-bg">
                <img
                  width="1880"
                  height="950"
                  alt=""
                  className="img-cover"
                  src="https://images.squarespace-cdn.com/content/v1/63ce6ff4e2f842783209369a/1689785049472-AK7NNZ1QAORDKRMDJZCM/Mr%26MrsBaker-1749.jpg"
                />
              </div>
              
            </li>
          ))}
        </ul>
  
      </section>
  </div>
  

  <Testimonals/>
  </div>
 
  )
}



  

export default Home
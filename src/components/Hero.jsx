import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import HeroGraphics from './Hero-Graphics';

const logo = require('../assets/images/hero-graphics.png');
const pdf = require('../assets/documents/Resume-GokulKrishnaE.pdf')

export default function Hero() {

  const [showArrow,setShowArrow] = useState(true)

  useEffect(()=>{
    window.addEventListener('scroll',showArrowFn)
    function showArrowFn(){
      if(window.scrollY>0){
        setShowArrow(false)
      }
      else{
        setShowArrow(true)
      }
    }
    return () => (window.removeEventListener('scroll',showArrowFn));
  },[showArrow])

  return (
    <div className='hero-section'>
        <div className='row align-items-center hero-row'>
          <div className="col-lg-7">
            <div className="sideLine">
              <h1>Hey there!</h1>
              <h4>I’m Gokul, A Front End Software Engineer. Feel free to reach out and connect with me!</h4>
            </div>
            <div className="mt-5 hero-buttons">
                <a href='mailto:gokul44krishna@gmail.com' className='btn btn-primary me-2 mb-3 mb-sm-0'><span id="mailIcon">Say Hello!</span><i className="far fa-envelope ms-2"></i></a>
                <a href={pdf} download className='btn btn-outline-primary'><span>Download Resume</span><i id="downloadIcon" className="fa-solid fa-download ms-2"></i></a>
            </div>
          </div>
          <div className="col-lg-5">
            <HeroGraphics/>
          </div>
        </div>
        {
          showArrow &&
          <div className="scroll-to-bottom">
          <i className="fas fa-circle-arrow-down"></i>
          </div>
        }
    </div>


  )
}

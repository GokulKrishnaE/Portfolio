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
    <section class="section hero-section section-border">
            <div class="container">
                <div class="d-md-flex align-items-center justify-content-between w-100% gap-5">
                    <div class="max-500">
                        <p class="mb-0">Hi Web! I am a</p>
                        <h1>Full Stack <span class="text-primary">Developer</span></h1>
                    </div>
                    <div>
                        <p>I am <span class="text-primary">Gokul Krishna E</span>. I am a passionate Full Stack Developer with expertise in building user-centric applications. From intuitive front-end designs to robust back-end solutions, I specialize in creating scalable systems that bring ideas to life with clean, maintainable code. Let’s collaborate to build something extraordinary!</p>
                        <button class="btn btn-primary">Download Resume</button>
                    </div>
                </div>
            </div>
            <div class="hero-bg-icon">
                <i class="fa-solid fa-layer-group"></i>
            </div>
        </section>


  )
}

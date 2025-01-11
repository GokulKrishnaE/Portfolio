import React, { useState,useEffect, useRef } from "react";
import file from '../assets/documents/Resume_FrontEnd-Engineer_GokulKrishnaE.pdf'


export default function Header({switchMode,tooltipTitle}){

    const [openNav,setOpenNav] = useState(false)

    const headerDropdown = useRef(null)

    function scrollToDiv(id){
        const section = document.getElementById(id);
        section.scrollIntoView({behavior: "smooth"});
        setOpenNav(false)
    }

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //       if (headerDropdown.current && !headerDropdown.current.contains(event.target)) {
    //         setOpenNav(false)
    //       }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   }, [headerDropdown]);

    return(
      <header>
      <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="name" href="#">Gokul Krishna E</a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="hamburgerIcon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav gap-lg-4 py-3 py-lg-0 ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#about-section">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience-section">Experience</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact-section">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href={file} download="resume.pdf">Download Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    )
}
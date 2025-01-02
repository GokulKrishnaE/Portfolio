import React, { useState,useEffect, useRef } from "react";


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
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav gap-lg-4 py-3 py-lg-0 ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">Download Resume</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </header>
    )
}
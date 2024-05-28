import React, { useState } from "react";


export default function Header({switchMode,tooltipTitle}){

    const [openNav,setOpenNav] = useState(false)

    return(
        <div className="header">
            <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="header-title">Gokul Krishna E</h1>
                </div>
                <ul className={`list-unstyled header-links ${openNav?'active': ''}`}>
                    <li><a href="#about-me"><i className="fas fa-user me-2 d-sm-none"></i>About Me</a></li>
                    <li><a href="#contact"><i className="fas fa-phone me-2 d-sm-none"></i>Contact</a></li>
                    <div className="d-none d-sm-block">
                    <li className="switchMode">
                            <input type="checkbox" name="modeToggle" id="modeToggle" onChange={(e)=>switchMode(e)}/>
                            <label htmlFor="modeToggle"><span className="visually-hidden">Toggle Mode</span></label>
                        </li>
                    </div>
                </ul>
                <div className="d-sm-none">
                    <div className="switchMode">
                        <input type="checkbox" name="modeToggle1" id="modeToggle1" onChange={(e)=>switchMode(e)}/>
                        <label htmlFor="modeToggle1"><span className="visually-hidden">Toggle Mode</span></label>
                    </div>
                </div>
                <div className="nav-toggle d-sm-none" onClick={()=>setOpenNav((prev)=>!openNav)}><i className="fa-solid fa-bars"></i></div>
            </div>
            </div>
        </div>
    )
}
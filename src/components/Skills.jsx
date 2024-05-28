import React, { useEffect } from 'react'

import Tooltip from '@mui/material/Tooltip';

export default function Skills() {

  // useEffect(()=>{
  //   $('tooltipToggle').tooltip()
  // },[])

  const skills = [
    {
      name: 'React',
      icon: 'fa-brands fa-react'
    },
    {
      name: 'Angular',
      icon: 'fa-brands fa-angular'
    },
    {
      name: 'HTML5',
      icon: 'fa-brands fa-html5'
    },
    {
      name: 'CSS3',
      icon: 'fa-brands fa-css3-alt'
    },
    {
      name: 'Javascript',
      icon: 'fa-brands fa-js'
    },
    {
      name: 'Sass',
      icon: 'fa-brands fa-sass'
    },
  ]
  return (
    <>
      <div className="section pt-0">
        <h2 className='section-title'>Skills</h2> 
        <div>
          <div className="skills-icons">
            {
              skills.map(skill=>{
                return <Tooltip arrow placement="top" title={skill.name}>
                          <i key={skill.name} className={`${skill.icon} tooltipToggle`}></i>
                      </Tooltip>

                // return <i key={skill.name} className={`${skill.icon} tooltipToggle`}></i>
              })
            }
          </div>
        </div>
      </div>
  </>
  )
}

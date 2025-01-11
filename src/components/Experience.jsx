import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <section class="section experience-section" id="experience-section">
      <div class="container">
          <h2 class="section-title">Experience</h2>
          <div class="max-80">
              <ul class="experiences mt-40">
                  <li>
                      <div class="companyName">Gallagher</div>
                      <div class="position">
                          <div class="position-name">Software Engineer</div>
                          <div class="position-year">2021 Nov - Present</div>
                          <div class="position-desc">
                              <p class="mb-0">As a Front-End Developer for an Employee Benefits portal, its CMS, and admin portals, I developed responsive web applications using Angular, PrimeNG, HTML, Bootstrap, and Sass. I integrated data-driven features with back-end systems and created intuitive, high-performance interfaces across these three products, focusing on delivering scalable solutions to enhance the overall user experience in managing employee benefits.</p>
                              <p>Skills used: Angular, PrimeNG, HTML5, CSS3, Javascript, Bootstrap, jQuery, Gulp, Accessibiltiy</p>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </section>
  )
}

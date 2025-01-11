import React, { useEffect } from 'react'

export default function About() {
  return (
    <section class="section section-skills" id="about-section">
    <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="max-80 mt-40">
            <p>My name is Gokul Krishna E. I am from Thalassery, Kannur, Kerala. I have a Postgraduate degree in computer science from Central University of Kerala and Graduate degree in computer science from Pondicherry university. I have been working as a Software Engineer for over 3 years at Gallgher. I have worked in technologies like Angular, JavaScript, TypeScript, HTML 5, CSS3, Sass, Bootstrap, jQuery etc. I am passionate about learning new technologies and aquiring skills.</p>
            <p>Here’s a showcase of my expertise</p>
            <div class="skills-section">
                <ul class="skills">
                    <li>
                        <div>
                            <span class="text-primary-light fw-bold me-3">Frontend Development:</span><span>Crafting visually stunning, responsive, user-friendly and accessible interfaces tailored to deliver exceptional user experiences.</span>
                            <div class="skill-items">
                                <span class="skill"><i class="fa-brands fa-angular me-2"></i>Angular</span>
                                <span class="skill"><i class="fa-brands fa-react me-2"></i>React</span>
                                <span class="skill"><i class="fa-brands fa-html5 me-2"></i>HTML5</span>
                                <span class="skill"><i class="fa-brands fa-css3-alt me-2"></i>CSS3</span>
                                <span class="skill"><i class="fa-brands fa-js me-2"></i>JavaScript</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="text-primary-light fw-bold me-3">Backend Development:</span><span>Developing efficient and scalable APIs to ensure seamless integration and optimal performance.</span>
                            <div class="skill-items">
                                <span class="skill"><i class="fa-solid fa-code fa-code me-2"></i>.NET Web API</span>
                                <span class="skill"><i class="fa-solid fa-code fa-code me-2"></i>Entity Framework</span>
                                <span class="skill"><i class="fa-brands fa-node-js me-2"></i>NodeJS</span>
                                <span class="skill"><i class="fa-solid fa-code fa-code me-2"></i>ExpressJS</span>
                                <span class="skill"><i class="fa-solid fa-database me-2"></i>SQL</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="text-primary-light fw-bold me-3">Development Tools & Frameworks:</span><span>Designing Streamlining workflows with tools and frameworks to enhance productivity and deliver polished results.Designing robust and scalable architectures to ensure seamless functionality and optimal performance.</span>
                            <div class="skill-items">
                                <span class="skill"><i class="fa-brands fa-bootstrap me-2"></i>Bootstrap</span>
                                <span class="skill"><i class="fa-solid fa-code me-2"></i>jQuery</span>
                                <span class="skill"><i class="fa-brands fa-gulp me-2"></i>Gulp</span>
                                <span class="skill"><i class="fa-brands fa-sass me-2"></i>Sass</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="text-primary-light fw-bold me-3">Version Control & Deployment:</span><span>Ensuring collaboration and precision with version control while managing seamless deployments.</span>
                            <div class="skill-items">
                                <span class="skill"><i class="fa-brands fa-git me-2"></i>Git</span>
                                <span class="skill"><i class="fa-brands fa-microsoft me-2"></i>Azure DevOps</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="text-primary-light fw-bold me-3">Domain Expertise:</span><span>Delivering tailored solutions for the employee benefits domain by blending technical expertise with industry insights.</span>
                            <div class="skill-items">
                                <span class="skill"><i class="fa-solid fa-hand-holding-heart me-2"></i>Employee Benefits Platforms</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

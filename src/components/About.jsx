import React from 'react'

export default function About() {

    let content = `My name is Gokul Krishna E. I am from Thalassery, 
    Kannur, Kerala. I have a Postgraduate degree in computer science 
    from Central University of Kerala and Graduate degree in computer 
    science from Pondicherry university. I have been working as a 
    Front end software engineer for 2.5 years at Gallgher. 
    I have worked in technologies like Angular, JavaScript, TypeScript, HTML 5, CSS3, Sass, Bootstrap, jQuery etc. 
    I am passionate about learning new technologies and aquiring skills.`

  return (
    <div className="section about-section" id='about-me'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="about-left h-100">
                        <h1 className="section-title mb-sm-0">About Me</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-content">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <>
    <div className="section">
        <h2 className='section-title'>Experience</h2> 
        <VerticalTimeline className={ 'timeline' } lineColor={ '#000' }>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024 April - present"
                icon={<i className="fa-solid fa-briefcase"></i>}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Gallgher</h4>
                <p><strong>Skills: </strong>Angular, PrimeNG, HTML5, CSS3, Javascript, jQuery</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021 Nov - 2024 April"
                icon={<i className="fa-solid fa-briefcase"></i>}
            >
                <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">BUCK</h4>
                <p><strong>Skills: </strong>Angular, PrimeNG, HTML5, CSS3, Javascript, jQuery</p>
            </VerticalTimelineElement>
        </VerticalTimeline> 
      </div>
    </>
  )
}

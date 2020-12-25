import React from 'react'
import My from '../myData'
import HTMLsvg from '../../images/html.svg'
import CSSsvg from '../../images/css.svg'
import JSsvg from '../../images/js-format.svg'
import HTMLskills from '../../images/html-skills.svg'

function AboutMe(){
    return(
        <div className="about-me">
            <h2 className="about-me__name">{My.name}</h2>
            <h2 className="about-me__last-name">{My.lastName}</h2>
            <span className="about-me__year">{My.getDateBirthday()}</span>
            <div className="skills">
                <p className="skills__title">Скилы</p>
                <svg className="chart" width="500" height="500" viewBox="0 0 50 50">
                    <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
                </svg>
                <img className="skills__icons" src={HTMLsvg} alt="HTML"/>
                <img className="skills__icons" src={CSSsvg} alt="CSS"/>
                <img className="skills__icons" src={JSsvg} alt="JS"/>
            </div>

        </div>
    )
}

export default AboutMe
import React, { useEffect, useState } from 'react'
import My from '../myData'
import Skills from './Skills'
import {dataSkills} from '../myData'

function AboutMe() {
       return (
        <div className="about-me">
            <h2 className="about-me__name">{My.name+' '+My.lastName}</h2>
            <span className="about-me__year">{My.getDateBirthday()}</span>
            <h3 className="skills__title">Скилы</h3>
            <div className="skills">
                {dataSkills.map(s =>
                    <Skills key={dataSkills.indexOf(s)} name={s.name} icons={s.icons} stroke={s.stroke}/>
                )}
            </div>
        </div>
    )
}

export default AboutMe
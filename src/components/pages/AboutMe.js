import React, { useEffect, useState } from 'react'
import My from '../myData'
import Skills from './Skills'
import {dataSkills} from '../myData'

function AboutMe() {
       return (
        <div className="about-me">
            <h2 className="about-me__name about-me__item">{My.name+' '+My.lastName}</h2>
            <div className="birthday about-me__item"><span className="about-me__subtitle">День рождения: </span><span className="about-me__date-birthday">{My.dateBirthday}</span><br/></div>
            <div className="phone about-me__item"><span className="about-me__subtitle">Телефон: </span><a href={`tel:${My.phone}`} className="about-me__date-birthday">{My.phone}</a><br/></div>
            <div className="mail about-me__item"><span className="about-me__subtitle">Почта: </span><a href={`mailto:${My.mail}`} className="about-me__date-birthday">{My.mail}</a><br/></div>
            <div className="vk about-me__item"><span className="about-me__subtitle">ВК: </span><a href={My.vk} className="about-me__date-birthday" target="_blank">{My.name+' '+My.lastName}</a><br/></div>
            <h3 className="skills__title">Скилы</h3>
            <div className="skills">
                {dataSkills.map(s =>
                    <Skills key={dataSkills.indexOf(s)} name={s.name} icons={s.icons} stroke={s.stroke} val={s.value}/>
                )}
            </div>
        </div>
    )
}

export default AboutMe
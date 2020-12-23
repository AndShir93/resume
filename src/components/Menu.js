import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(){
    return(
        <div className="menu">
                <NavLink to='/'>Обо мне</NavLink>
                <NavLink to='/my-contacts'>Контакты</NavLink>
                <NavLink to='/my-projects'>Мои работы</NavLink>
        </div>
    )
}

export default Menu
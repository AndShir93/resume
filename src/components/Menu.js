import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(){
    return(
        <div className="menu">
                <NavLink className='menu__item' activeClassName='menu__item_active' to='/about-me'>Обо мне</NavLink>
                <NavLink className='menu__item' activeClassName='menu__item_active' to='/my-projects'>Мои работы</NavLink>
        </div>
    )
}

export default Menu
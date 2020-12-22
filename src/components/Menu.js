import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Menu(){
    return(
        <div className="menu">
                <Link to='/AboutMe'>Обо мне</Link>
                <Link to='/MyContacts'>Контакты</Link>
                <Link to='/MyProjects'>Мои работы</Link>
        </div>
    )
}

export default Menu
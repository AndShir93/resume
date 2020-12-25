import React from 'react'
import {projects} from '../myData'


function MyProjects(){
    return(
        <div className="projects">
        {projects.map(p =>
            <div key={projects.indexOf(p)} className="project">
                    <h2 className="project__name">{p.title}</h2>
                    <div className="project__img-wrap"><img src={p.image} alt=""/></div>
                    <div className="project__description">{ p.description }</div>
            </div>
        )}
        </div>
    )
}

export default MyProjects
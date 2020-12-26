import React from 'react'

function Skills(props){
    console.log(props.stroke)
    return(
        <div className="skill">
            <svg className="chart skill__diagram" width="500" height="500" viewBox="0 0 50 50">
                <circle className="unit skill__value" r="15.9" cx="50%" cy="50%" stroke={props.stroke}></circle>
            </svg>
            <img className="skill__icons" src={props.icons} alt={props.name}/>
        </div>
    )
}

export default Skills
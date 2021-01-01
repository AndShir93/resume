import React from 'react'
import {colorThemes} from './colorThemes'
function Palette(props){
    return(
        <div className="palette">
            {colorThemes.map((theme) => 
                <div key={colorThemes.indexOf(theme)} className="palette__item-wrap" onClick={() => props.han(theme)}>
                    <div className="palette__item" style={{background:theme.color}}></div>
                </div>
        )}
        </div>
    )
}
export default Palette
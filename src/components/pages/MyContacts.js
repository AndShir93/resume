import React from 'react'

function MyContacts(){
    return(
        <div className="contacts">
            <h2 className="contacts__title">Контакты</h2>
            <div className="contacts__wrap">
                <a className="contact__item contact__mail" href="mailto:wugandrey@gmail.com" target="_blank" rel= "noreferrer" ></a>
                <a className="contact__item contact__vk" href="https://vk.com/id96268461" target="_blank" rel= "noreferrer" ></a>
                <a className="contact__item contact__tel" href="tel: 8(950) 171 37 44" target="_blank" rel= "noreferrer" ></a>
            </div>
        </div>
    )
}

export default MyContacts
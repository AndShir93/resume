import todoImg from '../images/todo-img.JPG'
import pegasusImg from '../images/pegasus-img.JPG'
import tmplatformImg from '../images/tmplatform-img.JPG'
import landingImg from '../images/landing-img.JPG'
import HTMLsvg from '../images/html.svg'
import CSSsvg from '../images/css.svg'
import JSsvg from '../images/js-format.svg'
import REACTsvg from '../images/react.svg'
import dragImg from '../images/drop-and-drag.JPG'

const my ={
    name: 'Андрей Широбоков',
    dateBirthday: '1993-03-19',
    phone: '8(950) 171 37 44',
    mail: 'wugandrey@gmail.com',
    vk: 'https://vk.com/id96268461'
}
export default my
export const projects = [
    {title: 'Тудушечка',image: todoImg, description: 'Данное приложение написано на React. Реализовано: перемещение задач по доске, перемещение задач между досками, удаление задач. Данные хранятся в LocalStorage.'},
    {title: 'Pegasus',image: pegasusImg, description: 'Лендинг с использованием современных разрешений изображений(webp), с загрузкой изображений под ретиновые устройства. Результаты PageSpeed Insights: Мобильная - 92 Десктоп - 100' },
    {title: 'Tmplatform', image: tmplatformImg, description: 'Лэндинг на CMS WordPress. Редактирование данных реализовано через плагин Advanced Custom Fields'},
    {title: 'Безымянный', image: landingImg, description: 'На данной странице реализованны: анимации, аккардион, слайдеры, темная тема'},
    {title: 'Drag and Drop', image: dragImg, description: 'Приложение написано на нативном js. Функционал: загрузка изображений, перетаскивание загруженных изображений'}
]
export const dataSkills = [{ name: 'HTML', value: 80, icons: HTMLsvg, stroke: '#ec6731' },
                { name: 'CSS', value: 70, icons: CSSsvg, stroke: '#0196e6' },
                { name: "JS", value: 50, icons: JSsvg, stroke: '#5254ff' },
                { name: 'React', value: 5, icons: REACTsvg, stroke: '#44b5c4'}]
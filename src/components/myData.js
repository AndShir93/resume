import todoImg from '../images/todo-img.JPG'
import pegasusImg from '../images/pegasus-img.JPG'
import tmplatformImg from '../images/tmplatform-img.JPG'
import landingImg from '../images/landing-img.JPG'

const my ={
    name: 'Андрей',
    lastName: 'Широбоков',
    dateBirthday: new Date('1993-03-19'),
    currentDate: new Date(),
    getDateBirthday: function(){return Math.trunc((this.currentDate - this.dateBirthday)/3.15589e10)}
}
export const projects = [
    {title: 'Тудушечка',image: todoImg, description: 'Данное приложение написано на React. Реализовано: перемещение задач по доске, перемещение задач между досками, удаление задач. Данные хранятся в LocalStorage.'},
    {title: 'Pegasus',image: pegasusImg, description: 'Лендинг с использованием современных разрешений изображений(webp), с загрузкой изображений под ретиновые устройства. Результаты PageSpeed Insights: Мобильная - 92 Десктоп - 100' },
    {title: 'Tmplatform', image: tmplatformImg, description: 'Лэндинг на CMS WordPress. Администрирование данной страницы реализовано через плагин Advanced Custom Fields'},
    {title: 'Безимянный', image: landingImg, description: 'На данной странице реализованны: анимации, аккардион, слайдеры ну и темная тема'}
]

export default my
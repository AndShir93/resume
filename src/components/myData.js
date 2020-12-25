import todoImg from '../images/todo-img.JPG'
import pegasusImg from '../images/pegasus-img.JPG'

const my ={
    name: 'Андрей',
    lastName: 'Широбоков',
    dateBirthday: new Date('1993-03-19'),
    currentDate: new Date(),
    getDateBirthday: function(){return Math.trunc((this.currentDate - this.dateBirthday)/3.15589e10)}
}
export const projects = [
    {title: 'Тудушечка',image: todoImg, description: 'Данное приложение написано на React. Реализовано: перемещение задач по доске, перемещение задач между досками, удаление задач. Данные хранятся в LocalStorage.'},
    {title: 'Pegasus',image: pegasusImg, description: 'Обычный лендинг с использованием современных разрешений изображений(webp). Результаты PageSpeed Insights: Мобильная - 92 Десктоп - 100' }
]

export default my
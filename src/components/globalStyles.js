import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar-track {  background-color: ${({theme}) => theme.backgroundColor};}
::-webkit-scrollbar-track-piece { background-color: #ffffff;}
::-webkit-scrollbar-thumb { height: 50px; background-color: ${({theme}) => theme.color}; border-radius: 3px;}
::-webkit-scrollbar-corner { background-color: ${({theme}) => theme.backgroundColor};}
::-webkit-resizer { background-color: ${({theme}) => theme.color};}
html, body {
  scrollbar-color: ${({theme}) => theme.color} ${({theme}) => theme.backgroundColor};
  transition: background .5s;
}
body{
    background-color: ${({theme}) => theme.backgroundColor};
    transition: background .5s;
}
.menu__item{
  color: ${({theme}) => theme.color};
  transition: background .5s;
}
.menu__item_active{
    background-color: ${({theme}) => theme.color};
    transition: background .5s;
    color: #fff;
}
.menu__item:hover {
    background-color: ${({theme}) => theme.color};
    transition: background .5s;
    color: #fff;
}
.about-me__name {
    color: ${({theme}) => theme.color};
    transition: background .5s;
}
.about-me__subtitle {
    color: ${({theme}) => theme.color};
    transition: background .5s;
}
.skills__title {
    color: ${({theme}) => theme.color};
    transition: background .5s;
}
.projects{
  scrollbar-color: ${({theme}) => theme.color} ${({theme}) => theme.backgroundColor};
  transition: background .5s;
}
.project__name {
    color: ${({theme}) => theme.color};
    transition: background .5s;
}
`
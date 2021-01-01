import React, { useState } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Menu from "./components/Menu"
import AboutMe from './components/pages/AboutMe'
import MyProjects from './components/pages/MyProjects'
import Palette from './components/Palette'
import { GlobalStyles } from './components/globalStyles'
import { colorThemes } from './components/colorThemes'
import { ThemeProvider} from "styled-components"

function App() {
	const [currentTheme, setCurrentTheme] = useState(colorThemes[0])
	
	function handlerTheme(t){		
		let i = colorThemes.indexOf(t)
		setCurrentTheme(
			colorThemes[i]
		)
	}

	return (
		<div className="main">
			<BrowserRouter>
				<ThemeProvider theme = {currentTheme}>
					<GlobalStyles />
					<Menu />
					<Palette han={handlerTheme} />
					<div className="info">
						<Route path='/my-projects' component={MyProjects}/>
						<Route path='/about-me' component={AboutMe}/>
						<Redirect path='/' to="/about-me"/>
					</div>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
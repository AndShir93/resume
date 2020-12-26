import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Menu from "./components/Menu"
import AboutMe from './components/pages/AboutMe'
import MyContacts from './components/pages/MyContacts'
import MyProjects from './components/pages/MyProjects'

function App() {
	return (
		<div className="main">
			<BrowserRouter>
				<Menu />
				<div className="info">
					<Route path='/my-projects' component={MyProjects}/>
					<Route path='/about-me' component={AboutMe}/>
					<Redirect path='/' to="/about-me"/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
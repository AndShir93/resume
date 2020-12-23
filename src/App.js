import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from "./components/Menu"
import AboutMe from './components/pages/AboutMe'
import MyContacts from './components/pages/MyContacts'
import MyProjects from './components/pages/MyProjects'

function App() {
	return (
		<div className="main">
			<Router>
				<Menu />
				<Route path='/my-contacts' component={MyContacts}/>
				<Route path='/my-projects' component={MyProjects}/>
				<Route exact path='/' component={AboutMe}/>
			</Router>
		</div>
	);
}

export default App;
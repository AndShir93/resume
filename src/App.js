import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Menu from "./components/Menu"
import AboutMe from './components/menu-items/AboutMe'
import MyContacts from './components/menu-items/MyContacts'
import MyProjects from './components/menu-items/MyProjects'

function App() {
	return (
		<div className="main">
			<Router>
				<Menu />
				<Switch>
					<Route path='/AboutMe'>
						<AboutMe />
					</Route>
					<Route path='/MyContacts'>
						<MyContacts />
					</Route>
					<Route path='/MyProjects'>
						<MyProjects />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
import React from 'react';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

type TestProps = {
	name: string;
};

const Test: React.FC<TestProps> = ({ name }) => {
	return (
		<div>
			<p>{name}</p>
			<div>
				<div>
					<Link to='/'>/</Link>
				</div>
				<div>
					<Link to='/about'>about</Link>
				</div>
				<div>
					<Link to='/dashboard'>dashboard</Link>
				</div>
			</div>
		</div>
	);
};

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Test name='/' />
				</Route>
				<Route path='/about'>
					<Test name='/about' />
				</Route>
				<Route path='/dashboard'>
					<Test name='/dashboard' />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;

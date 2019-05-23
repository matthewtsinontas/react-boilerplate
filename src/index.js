import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

const MainWrapper = () => (
	<div>
		<nav>
			<Link to="/">Home</Link>
		</nav>
		<Route path="/" exact component={HomePage} />
	</div>
);

export default MainWrapper;
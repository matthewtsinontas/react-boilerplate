import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './src';

ReactDOM.render(
	<HashRouter>
		<Main />
	</HashRouter>,
	document.getElementById('app')
);
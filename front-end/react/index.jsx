/**
 * The Root of the React Application
 * @author James Wake
 * @version 0.1.0
 */
import React  from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import scss from './styles/style.scss'; //Import Styles Here

//Static Routing for React App
import App from './components/App.jsx';	
import Accordion from './components/Accordion.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
		<Route path="/" component={App}>
		{/*	<IndexRoute component={Accordion}/>     */}
		{/*	<Route path="/chart" component={Chart}/>  */}
		</Route>
	</Router>
), document.getElementById('react'));

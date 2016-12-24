import React from 'react';
import scss from '../styles/header.scss'; 
import { Link } from 'react-router';
/**
 * Root Application Container
 * @author James Wake
 * @class App
 */
export default class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">3J Enterprise Storage Analysis System</Link>
            </div>
            </nav>
        );
	}
};


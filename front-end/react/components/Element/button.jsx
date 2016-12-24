import React from 'react';
import scss from '../../styles/style.scss'; 
/**
 * Root Application Container
 * @author James Wake
 * @class App
 */
export default class Header extends React.Component {
    render() {
        return(
            <div id="wrapper" className="PageContainer" onClick={console.log('hello world from home')}>
              <nav className="navbar navbar-default navbar-static-top" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="">3J System Storage Analysis App</a>
               </div>
               </nav>
            </div>
        );
	}
};


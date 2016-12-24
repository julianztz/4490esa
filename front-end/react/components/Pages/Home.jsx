import React from 'react';
import scss from '../../styles/homePage.scss'; 
// import socket from '../../socket.js'

/**
 * Home Page
 * @author James Wake
 * @class Home
 */
export default class Home extends React.Component {
    //React Constructor
    // constructor(...args){
    //     super(...args);
    //     this.state = {
    //         "home": ""
    //     }
    // }
    render() {
        return(
            <div className="homePage" onClick={console.log('hello world from home')}>
             <div className="briefIntro">
                <h1>Brief Introduction</h1>
                <hr/>    
                <p className="para">
               The Enterprise Storage Analysis System provides users with a clear tree-based
               view and a pie chart view of disk usage. It demonstrates disk usage percentage 
               alongside a usage-sorted list of file extensions, and it is integrated with a 
               colorful graphical display, which represents the size of every file and folder 
               in the system. The Enterprise Storage Analysis System is designed to assist in 
               analyzing and planning storage in the Department of Computer Science in western.
               </p>
             </div>
            </div>
        );
	}
};

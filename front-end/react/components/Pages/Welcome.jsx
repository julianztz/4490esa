import React from 'react';
// import scss from '../../styles/style.scss'; 
import scss from '../../styles/welcomePage.scss'; 
/**
 * Home Page
 * @author James Wake
 * @class Home
 */

export default class Welcome extends React.Component{
    render(){
        return(
            <div className="welcomePage">   
                 <h1 className="welcomeMsg">  Welcome to 3J !!!!!  </h1>
            </div>
        );
    }
}
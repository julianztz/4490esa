import React from 'react';
import scss from '../styles/content.scss'; 
/**
 * Root Application Container
 * @author James Wake
 * @class Content
 */
export default class Content extends React.Component{
    render(){
        return(
            <div id="page-wrapper">
                <div className="row">
                    <h1> from content page </h1>
                </div>
            </div>
        );
    }
};

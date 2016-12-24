import React from 'react';
import scss from '../../styles/sysPage.scss'; 
import Donutchart from '../Element/donutchart.jsx';
import Treemap from '../Element/treemap.jsx';

/**
 * Home Page
 * @author James Wake
 * @class Home
 */
export default class FileSystem extends React.Component {
    render() {
        return(
            <div className="sysPage">
             <div className="sysList">
                <h1>Local Server</h1>
                <hr/>
                <div className="input-group">
               {/*     <form action="">
                    <label for="path">File Path: </label>  
                    <input id="path" className="form-control" placeholder="plz enter the directory path here"/>
                    <span className="input-group-addon">></span>  
                    </form>   */}
                    <input type="text" className="form-control" placeholder="C:/"/>
                    <span className="input-group-addon">></span>  
                </div>
                <div className="sysStat">
                    <h1>file system status</h1>    
                </div>
        
           {/*     <Treemap/>
                <Donutchart/>   */}
                {this.props.children}
                                      
             </div>
            </div>
        );
	}
};

import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import scss from '../styles/navbar.scss'; 
/**
 * Root Application Container
 * @author James Wake
 * @class App
 */

export default class Navbar extends React.Component{
  
  constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }

    render(){
        return(
            <div className="navbar-default sidebar" role="navigation">   
                <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
               
               {/*
                   <li className="sidebar-search">
                      <div className="input-group custom-search-form">
                             <input type="text" className="form-control" placeholder="Search..."/>
                             <span className="input-group-btn">
                             <button className="btn btn-default" type="button">
                                <i className="fa fa-search"></i>  
                             </button>
                         </span>
                      </div>
                   </li> 
                   */}     

                    <li>
                     <Link to="/home" className="fa fa-dashboard fa-fw">Overview</Link>
                    </li>
                    <li>
                     <Link to="/fileSystem" className="fa fa-dashboard fa-fw">FileSystem</Link>
                    </li>

                    <li>
                     <Link to="/fileSystem" className="fa fa-bar-chart-o fa-fw">Charts<span className="fa arrow"></span></Link>
                      <ul className="two-charts">
                        <li>
                          <Link className="treebtn" to="/fileSystem">Treemap</Link>
                        </li>
                        <li>
                          <Link className="donutbtn"to="#/donut">Donut Chart</Link>
                        </li>
                     </ul>    
                    </li>
                    <li>
                     <Link to="#" className="fa fa-table fa-fw">Tables</Link>
                    </li>
                    <li>
                     <Link to="#" className="fa fa-edit fa-fw">Forms</Link>
                    </li>
                    <li>
                     <Link to="#" className="fa fa-wrench fa-fw">UI Elements<span className="fa arrow"></span></Link>
                      <ul className="nav nav-second-level">
                       {/*  
                         <li>
                            <Link to="#">Panels and Wells</Link>
                         </li>
                         <li>
                            <Link to="#">Buttons</Link>
                         </li>
                         <li>
                            <Link to="#">Links</Link>
                         </li>
                         <li>
                            <Link to="#">Icons</Link>
                         </li>
                         <li>
                            <Link to="#">Notification</Link>
                         </li>
                         <li>
                            <Link to="#">Grids</Link>
                         </li>
                         */}

                      </ul>
                    </li>
                    <li>
                     <Link to="#" className="fa fa-sitemap fa-fw">Multi-Level Dropdown<span className="fa arrow"></span></Link>
                     <ul className="nav nav-second-level">
                      {/*
                       <li>
                          <Link to="#">Second Level Item</Link>
                       </li>
                       <li>
                          <Link to="#">Second Level Item</Link>
                       </li>
                       <li>
                            <Link to="#">Third Level <span className="fa arrow"></span></Link>
                            <ul className="nav nav-third-level">
                               <li>
                                  <Link to="#">Third Level Item</Link>
                               </li>
                               <li>
                                  <Link to="#">Third Level Item</Link>
                               </li>
                               <li>
                                  <Link to="#">Third Level Item</Link>
                               </li>
                            </ul>
                       </li>
                       */}
                     </ul>
                    </li>
                    <li>
                      <Link to="#" className="fa fa-files-o fa-fw">Sample Pages<span className="fa arrow"></span></Link>
                      <ul className="nav nav-second-level">
                       {/*
                         <li>
                           <Link to="#">Blank Page</Link>
                         </li>
                         <li>
                           <Link to="#">Login Page</Link>
                         </li>
                         */}
                     </ul>
                   </li> 
                   <li className="lastEmptyList">     </li>     
                </ul>
               </div>
            </div> 
      );
    };
};

// class Item extends React.Component{
//     render() {
//         return (
//             <div>ho</div>
//         )
//     }
// };
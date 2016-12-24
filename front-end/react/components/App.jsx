import React from 'react';
// import Home from './Pages/Home.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
// import Content from './Content.jsx';
// import Footer from 'Footer.jsx';
import scss from '../styles/style.scss'; 
/**
//  * Root Application Container 
 * @author James Wake
 * @class App
 */
export default class App extends React.Component {
    render() {
        return(
            <div id="wrapper">
                <Header/>
                <Navbar/>
             {/*   <Content/>    */}  
                {this.props.children}    
             {/* default page from RouteIndex in index.jsx;
                 Welcome.jsx in this case*/}
            </div>
        );
	}
};
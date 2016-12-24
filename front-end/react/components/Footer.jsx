import React from 'react';

/**
 * Root Application Container
 * @author James Wake
 * @class App
 */
class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Header/> 
                <Navbar/>
                <Footer/> 
                {this.props.children}
            </div>
        );
	}
};

class Header extends React.Component {
   render() {
      return (
         <div>
         </div>
      );
   }
}

class Navbar extends React.Component {
   render() {
      return (
         <div>
         </div>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <div>
         </div>
      );
   }
}

export default App;
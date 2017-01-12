import React from 'react';
import ReactDOM from 'react-dom';
import SplitPane from './splitpane/SplitPane.jsx';
import Resizer from './splitpane/Resizer.jsx';

import scss from '../styles/accordion.scss';
import FileSystem from './filesystem/FileSystem.jsx';
import FileInfo from './fileinfo/FileInfo.jsx';
import Graphs from './graph/Graphs.jsx';

class Accordion extends React.Component{

    render(){
        return(
    //        {/*  
        <SplitPane split="vertical" defaultSize="94%">
            <h1>Welcome!!</h1>
            <SplitPane split="vertical" defaultSize="0">
                <FileSystem/>
                    <SplitPane split="vertical" defaultSize="0">
                       <FileInfo/>
                       <Graphs/>
                    </SplitPane>
            </SplitPane>
        </SplitPane>
  //  */}

 
      
        )
    }
}
export default Accordion;


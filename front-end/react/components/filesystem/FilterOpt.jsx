import React from 'react';
import ReactDOM from 'react-dom';
//filter
import {Slider, Toggle} from 'react-filters/dist';
import CollapseOpt from './CollapseOpt.jsx';

class FilterOpt extends React.Component{

      constructor(props){
            super(props);
            this.state = {
                  dropdownIsActive: false,
                  dropdownIsVisible: false,
            }
            this.sizeDropdown = this.sizeDropdown.bind(this);
            this.nameDropdown = this.nameDropdown.bind(this);
            this.cDateDropdown = this.cDateDropdown.bind(this);
            this.mDateDropdown = this.mDateDropdown.bind(this);
      };

      sizeDropdown(){
            var size = this.refs.filesizeOPT;
            // var x;
            // console.log(size);
            // if(size.value='file size')
            // {
            //       x = this.refs.collapseDetail.refs.opt1;
            // }else if(size.value='file name'){
            //       x = this.refs.collapseDetail.refs.opt2;

            // }
            // else{}
            // console.log(x);
            var x = this.refs.collapseDetail.refs.opt1;
            if(size.checked){
                  x.className = 'show-more-options';
            }
            else{
                  x.className = 'hide';
            }
      }
      nameDropdown(){
            var name = this.refs.filenameOPT;
            var x = this.refs.collapseDetail.refs.opt2;
            if(name.checked){
                  x.className = 'input-group';
                  // x.style.width: 100%
            }
            else{
                  x.className = 'hide';
            }
      }

      cDateDropdown(){
            var cDate = this.refs.createdateOPT;
            var x = this.refs.collapseDetail.refs.opt3;
            if(cDate.checked){
                  x.className = 'show-more-options';
            }
            else{
                  x.className = 'hide';
            }
      }

      mDateDropdown(){
            var mDate = this.refs.modifydateOPT;
            var x = this.refs.collapseDetail.refs.opt4;
            if(mDate.checked){
                  x.className = 'show-more-options';
            }
            else{
                  x.className = 'hide';
            }
      }

    render(){
        return(
         <div id='filter-options'>
            <div className='filter-opt'>
               <label>
                  <input ref='filesizeOPT' className='ckeckbox' type="checkbox" value="file size" onChange={this.sizeDropdown}/>file size          
               </label>
               <CollapseOpt ref='collapseDetail'/>
            </div>
      

            <div className='filter-opt'>
            <label>
                  <input ref='filenameOPT' type="checkbox" value="file name" onChange={this.nameDropdown}/>file name
            </label>
            <CollapseOpt ref='collapseDetail'/>
            </div>
            
            <div className="filter-opt">
            <label>
                  <input ref='createdateOPT' type="checkbox" value="create date" onChange={this.cDateDropdown}/>create date
            </label>
            </div>
           
           <div className="filter-opt">
            <label>
                  <input ref='modifydateOPT' type="checkbox" value="modify date" onChange={this.mDateDropdown}/>modify date
            </label>
            </div>
          
        </div>   
        )
    }
 
}
export default FilterOpt;

               

               //       componentDidMount(){
//             window.addEventListener('click', this._hideDropdown, false);
//       }
//       componentWillUnmount(){
//             window.addEventListener('click', this._hideDropdown, false);
//       }
//       _stopPropagation(e){
//             e.stopPropagation();
//       }
//       _toggleDropdown(){
//             const{dropdownIsVisible} = this.state;
//             this.setState({dropdownIsVisible:!dropdownIsVisible});
//       }
//       _hideDropdown(){
//             const{dropdownIsActive} = this.state;
//             if(!dropdownIsActive){
//                   this.setState({dropdownIsVisible:false});
//             }
//       }
//       _handleBlur(){
//             this.setState({
//                   dropdownIsVisible: false,
//                   dropdownIsActive: false,
//             });
//       }

//       _doSomething() {
//       // Do something on click inside the dropdown block...
//       window.alert('Done something!');
//       }


//  _renderDropdown() {
//     const dropdownId = this.props.id;
//     const { dropdownIsVisible } = this.state;

//     return (
//       <div
//         className="wrapper"
//         tabIndex={dropdownId}
//         onFocus={this._handleFocus}
//         onBlur={this._handleBlur}
//         onClick={this._toggleDropdown}
//       >
//         <span className="toggler">
//           Dropdown {dropdownId}
//         </span>
//         {
//           dropdownIsVisible &&
//           <div className="content">
//             <div className="item" onClick={this._doSomething}>
//               Do something!
//             </div>
//           </div>
//         }
//       </div>
//     );
//   }


//   render() {
//     return (
//       <div className="dropdown">
//         {/* Some content */}
//         {this._renderDropdown()}
//       </div>
//     );
//   }
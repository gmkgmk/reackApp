import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router-dom';
import './style.less';
import SearchInput from "../SearchInput";
class Header extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const pageName = "Home";
    return(
     <header className={`clearfix`} id={`${pageName}_header`}>
       <div className={`floatLeft ${pageName}_header_left`}>
          <Link to="/city">
              &nbsp;
              <span>{this.props.cityName}</span>
              &nbsp;
              <i className="icon-angle-down"></i>
          </Link>
       </div>
       <div className={`floatRight ${pageName}_header_right`}>
          <Link to="/User">   
            <i className="icon-user"></i>
          </Link>
       </div>
       <div className={`${pageName}_header_middle`}>
        <div  className={`search_container`}>
          <i className="icon-search"></i>
          <SearchInput value="" enterFn={this.enterFn.bind(this)}/>
        </div>
       </div>
     </header>
    )
  };
  enterFn(value){
   // hashHistory.push("/search/all/"+encodeURIComponent(value))
  }
}

module.exports = Header;
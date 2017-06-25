import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'
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
          &nbsp;
          <span>{this.props.cityName}</span>
          &nbsp;
          <i className="icon-angle-down"></i>
       </div>
       <div className={`floatRight ${pageName}_header_right`}>
          <i className="icon-user"></i>
       </div>
       <div className={`${pageName}_header_middle`}>
        <div  className={`search_container`}>
          <i className="icon-search"></i>
          <input type="text" placeholder="请输入搜索内容"/>
        </div>
       </div>
     </header>
    )
  }
}

module.exports = Header;
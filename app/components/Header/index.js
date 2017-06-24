import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'
class Header extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
     <header className="clearfix">
       <div className="floatLeft">
          深圳
          <i className="icon-angle-down"></i>
       </div>
       <div className="floatRight">
          <i className="icon-user"></i>
       </div>
       <div>
          <i className="icon-search"></i><input/>
       </div>
     </header>
    )
  }
}

module.exports = Header;
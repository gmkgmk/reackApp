import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
class Header extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
      <header id={`common-header`}>
        <span className={`back-icon`} onClick={this.goBack.bind(this)}>
        <i className={`icon-chevron-left`}></i>
        </span>
        <h1>{this.props.title}</h1>
      </header>
    )
  }
  goBack(){
    window.history.back()
  }
}

export default  Header;
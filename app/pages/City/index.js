import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class City extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
      <h1>城市页面</h1>
    )
  }
}

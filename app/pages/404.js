import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class NotFound extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
      <h1>404 not found page</h1>
    )
  }
}

export default  NotFound;
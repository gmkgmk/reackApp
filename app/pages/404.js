import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Page404 extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    console.log(this.props)
    return(
      <h1>page not found</h1>
    )
  }
}

export default Page404;
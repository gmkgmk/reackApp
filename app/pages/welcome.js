import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Welcome extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return(
      <section className={`welcome`}>
        <img src="../static/images/load_more.gif" alt=""/>
      </section>
    )
  }
}
export default  Welcome;

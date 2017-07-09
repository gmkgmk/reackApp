import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Item from "./Item";
class OrderList extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
      const data = this.props.data;
      const submitFn = this.props.submitFn;
      const items = data.map((item, index) => {
        return <Item key={index} data={item} submitFn={this.props.submitFn}/>
        })
      return (
        <div>
          {items}
        </div>
      )
    }
  }
export default  OrderList;

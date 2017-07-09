import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class BuyAndStore extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <div className={`buy-store-container clearfix`}>
        <div className={`item-container floatLeft`}>
      {
        this.props.isStore
        ? <button className="selected" onClick={this.storeClickFn.bind(this)}>已收藏</button>
        : <button onClick={this.storeClickFn.bind(this)}>收藏</button>
      }
      </div>
        <div className={`item-container floatRight`}>
            <button onClick={this.buyClickFn.bind(this)} className="buyBtn">购买</button>
        </div>
    </div>
    )
  };
  buyClickFn() {
    const buyFn = this.props.buyFn
    buyFn()
  };
  storeClickFn() {
    const storeFn = this.props.storeFn()
  }
}

export default  BuyAndStore;
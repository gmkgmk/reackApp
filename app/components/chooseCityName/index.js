import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class ChooseCityName extends Component{
   constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render() {
    return (
      <div className={`choose-city`}>
        <h2>{this.props.cityName}</h2>
      </div>
    )
  }
}

export default ChooseCityName;
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class CityList extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
     <section className={`city-list-container`}>
        <h1>城市列表</h1>
        <ul className="clearfix">
          <li>
              <span onClick={this.getCityName.bind(this, '北京')}>北京</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '上海')}>上海</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '杭州')}>杭州</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '广州')}>广州</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '苏州')}>苏州</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '深圳')}>深圳</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '南京')}>南京</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '天津')}>天津</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '重庆')}>重庆</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '厦门')}>厦门</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '武汉')}>武汉</span>
          </li>
          <li>
              <span onClick={this.getCityName.bind(this, '西安')}>西安</span>
          </li>
       </ul>
     </section>
    )
  }
  getCityName(newCity){
    console.log(newCity)
    let changeFn = this.props.changeCityFn;
    changeFn(newCity)
  }
}

export default  CityList;
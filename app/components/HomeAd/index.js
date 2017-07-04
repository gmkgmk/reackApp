import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.css'
class HomeAd extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
      <div id="home-ad">
          <h2 className={`home-list-title`}>超值特惠</h2>
          <div className="ad-container clearfix">
              {this.props.data.map((item, index) => {
                  return <div key={index} className="ad-item floatLeft">
                      <a href={item.link} target="_blank">
                          <img src={item.img} alt={item.title}/>
                      </a>
                  </div>
              })}
          </div>
      </div>
    )
  }
}

export default  HomeAd;
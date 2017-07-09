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
      <section id="home-ad">
            <div className={`index_sale_header clearfix`}>
                <span className={`title_left floatLeft`}>超值特惠</span>
                <span className="more">更多优惠</span>
                <i className="arrowent"></i>
            </div>
          <div className="ad-container clearfix">
              {this.props.data.map((item, index) => {
                  return <div key={index} className="ad-item floatLeft">
                      <a href={item.link} target="_blank">
                          <img src={item.img} alt={item.title}/>
                      </a>
                  </div>
              })}
          </div>
      </section>
    )
  }
}

export default  HomeAd;
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.css'
import Item from './Item'

class HomeList extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
      <section className="list-container">
         <div className={`index_sale_header clearfix`}>
                <span className={`title_left floatLeft`}>猜你喜欢</span>
                <span className="more">更多优惠</span>
                <i className="arrowent"></i>
            </div>
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </section>
    )
  }
}

export default  HomeList;
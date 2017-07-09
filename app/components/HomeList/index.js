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
       
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </section>
    )
  }
}

export default  HomeList;
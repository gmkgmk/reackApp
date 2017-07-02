import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from "../../components/Header";
import Info from "./subpage/info";
import Comments from "./subpage/comments";

export default class Detail extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
      const id = this.props.params.id
    return(
     <section>
       <Header title="商品信息"/>
       <Info id={id}/>
       <Comments id={id}/>
     </section>
    )
  }
}

import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from "../../components/Header";
import Info from "./subpage/info";
import Comments from "./subpage/comments";
import Buy from "./subpage/buy";

export default class Detail extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render() {
    const id = this.props.match.params.id
    console.log(id)
    return(
     <section>
       <Header title="商品信息"/>
       <Info id={id}/>
       <Buy id={id}/>
       <Comments id={id}/>
     </section>
    )
  }
}

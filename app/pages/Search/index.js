import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from "../../components/SearchHeader";

import SearchList from './subpage/SearchList';
export default class Search extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    const params=this.props.params;
    console.log(params)
    return(
     <section>
        <SearchHeader keyWord={params.keyword}/>
        <SearchList keyWord={params.keyword} type={params.type}/>
      </section>
    )
  }
}

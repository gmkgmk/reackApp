import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from "../../components/SearchHeader";


import SearchList from './subpage/SearchList';

import './style.less'
export default class Search extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    const params = this.props.match.params;
    return(
     <section>
        <SearchHeader keyWord={params.keyword} />
        <p className="index_title"> 当前搜索无结果，为你推荐</p>
        <SearchList keyWord={params.keyword} type={params.type}/>
      </section>
    )
  }
}

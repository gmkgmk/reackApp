import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory}  from 'react-router'
import './style.less';
import SearchInput from "../SearchInput";

class SearchHeader extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
     <header  id="search-header" className="clearfix">
          <span onClick={this.clickBack.bind(this)}  className={`back-icon floatLeft`}>
              <i className="icon-chevron-left"></i>
          </span>
         <div className="input-container">
           <i className="icon-search"></i>
            &nbsp;
            <SearchInput value={this.props.keyWord || ""} enterFn={this.enterFn.bind(this)}/>
          </div>
     </header>
    )
  }
  clickBack() {
    window.history.back()
  }
  enterFn(value){
    hashHistory.push("/search/all/"+encodeURIComponent(value))
  }
}

module.exports = SearchHeader;
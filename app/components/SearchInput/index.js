import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class SearchInput extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      value:'',
    }
  }
  render(){
    return(
     <input 
            className={`search-input`}
            placeholder="请输入关键字"
            type="text"
            value={this.state.value}
            onChange={this.changeFn.bind(this)}
            onKeyUp={this.onKeyUpFn.bind(this)}
             />  
    )
  }
  componentDidMount(){
    this.setState({
      value:this.props.value||""
    })
  }
  changeFn(e){
    this.setState({
      value:e.target.value,
    })
  };
  onKeyUpFn(e){
    if(e.keyCode!==13){
      return
    }
    this.props.enterFn(this.state.value)
  };
  clickHandle(){

  };
}

export default  SearchInput;
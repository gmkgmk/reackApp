import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromOther from '../../../actions/store'

import BuyAndStore from "../../../components/BuyAndStore"
class Buy extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isStore: false
    }
  }
  render(){
    return(
      <BuyAndStore isStore={this.state.isStore} buyFn={this.buyFn.bind(this)} storeFn={this.goStore.bind(this)}/>
    )
  };
  componentDidMount() {
    // 验证当前商户是否收藏
    this.checkStoreState()
  };
    // 检验当前商户是否被收藏
  checkStoreState() {
    const id = this.props.id
    const store = this.props.store

      // some 即任何一个满足即可
    store.some(item => {
      if (item.id === id) {
        // 已经被收藏
        this.setState({
            isStore: true
        })
        // 跳出循环
        return true
      }
    })
  };
  // 检查登录状态
  testLogin() {
    const id = this.props.id
    const userinfo = this.props.userinfo
    if (!userinfo.username) {
        // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
        hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
        return false
    }
    return true
  };
  buyFn() {
    const loginFlag = this.testLogin();
    if (!loginFlag) {
        return
    };
    alert("购买成功");
    // 跳转到用户主页
    hashHistory.push('/User')
  }
  goStore() {
    const loginFlag = this.testLogin()
    if (!loginFlag) {
          return
    }


    const id = this.props.id
    const storeActions = this.props.storeActions
    if (this.state.isStore) {
        // 已经被收藏了，则取消收藏
       storeActions.remove({id: id})
    } else {
        // 未收藏，则添加到收藏中
       storeActions.add({id: id})
    }
    // 修改状态
    this.setState({
      isStore: !this.state.isStore
    })
  }
}
function mapStateToProps(state){
  return {
      userinfo: state.userinfo,
        store: state.store
  }
}
function mapDispatchToProps(dispatch){
   return {
    storeActions: bindActionCreators(storeActionsFromOther,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy);

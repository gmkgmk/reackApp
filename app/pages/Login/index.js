import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOther from '../..//actions/userInfo'

import Header from '../../components/Header';
import LoginComponent from '../../components/Login';
class Login extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      checking: true,
    }
  };
  render(){
    return (
     <section>
       <Header title="登陆" />
       {
         this.state.checking
        ?(<h1>等待中</h1>):
            (<LoginComponent alreadyLoginFn={this.alreadyLoginFn.bind(this)} />)
        }
     </section>
    )
  };
  componentDidMount() {
    this.testLogin();
  }
  // 获取登陆后的用户名
  alreadyLoginFn(username) {
    // 获取后设置redux的值
    const actions = this.props.userInfoActions;
    let userInfo = this.props.userinfo;
    
    userInfo.username = username;
    actions.update(userInfo);
  
    const params = this.props.params;
    const router = params.router;
    // 有路由就去路由的页面,没路由就去用户信息页面
    if (router) {
      hashHistory.push(router);
    } else {
      this.goUserPage();
    }

  }
  // 判断是否登陆
  testLogin() {
    const userInfo = this.props.userinfo;
    console.log(userInfo)
    if (userInfo.username) {
      this.goUserPage();
    } else {
      this.setState({
        checking: false,
      })
    }
  };
  // 登陆后去的页面
  goUserPage() {
    hashHistory.push('/User')
  }
}

function mapStateToProps(state){
  return {
      userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
   return {
    userInfoActions: bindActionCreators(userInfoActionsFromOther,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'
import SearchInput from "../SearchInput";

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      checking: true,
      phong:"",
    }
  };
  render() {
    return (
        <section id="login-container">
          <div className={`input-container phone-container`}>
            <i className="icon-tablet"></i>
            <input
              type="text"
              placeholder="请输入手机号/邮箱/用户名"
              onChange={this.changeFn.bind(this)}
              value={this.state.phone} />
          </div>
          <div className={`input-container password-container`}>
            <i className="icon-key"></i>
            <button>发送验证码</button>
            <input type="text" placeholder="输入验证码" />
          </div>
          <p className="form-info">未注册的手机号码验证后自动创建点评账户</p>
          <button type="button"
            className="btn-login"
            onClick={this.submitFn.bind(this)}>登陆</button> 
        </section>
    )
  };
  changeFn(e) {
    this.setState({
      phone:e.target.value,
    })
  };
  submitFn() {
    const username = this.state.phone;
    const alreadyLoginFn = this.props.alreadyLoginFn;
    alreadyLoginFn(username);
  }
}
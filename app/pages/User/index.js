import React, {
  Component
} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import * as storeActionsFromOther from '../../actions/store';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/orderList';

class User extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render() {
    const userinfo = this.props.userinfo
    return ( 
      <section>
        <Header title="用户主页" backRouter="/"/>
        <UserInfo username={userinfo.username} city={userinfo.cityName}/>
        <OrderList username={userinfo.username}/>
      </section>
    )
  };
  componentDidMount() {
    this.testLogin()
  }
  testLogin() {
     // 如果未登录，跳转到登录页面
    if (!this.props.userinfo.username) {
       hashHistory.push('/Login')
    }
  }
}




// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
};

function mapDispatchToProps(dispatch) {
  return {}
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

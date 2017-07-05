import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getOrderListData,postComment } from '../../../fetch/user/orderlist'

import OrderListComponent from "../../../components/OrderList"

import './style.less'

class OrderList extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:[]
    }
  }
  render() {
    return(
      <article className={`order-list-container`}>
        <h2>您的订单</h2>
        {
        this.state.data.length
        ? <OrderListComponent data={this.state.data} submitFn={this.submitFn.bind(this)}/>
        : <div>{/* loading */}</div>
        }
      </article>
    )
  };
  componentDidMount(){
    const username = this.props.username;
      this.loadOrder(username);
    if(username){
    }
  };
  // 获取订单列表数据
  loadOrder(username){
    const result = getOrderListData(username);
    result.then(res=>{
      return res.json();
    }).then(json=>{
      this.setState({
        data:json,
      })
    }).catch(ex => {
        if (__DEV__) {
          console.error('用户主页“订单列表”获取数据报错, ', ex.message)
        }
    })

  };

  // 提交评价
  submitFn(id,value,star,callback){
    const result = postComment(id,value,star);
    result.then(res => {
        return res.json()
    }).then(json => {
        if (json.errno === 0) {
            // 已经评价，修改状态
          callback()
        }
    })
  }
}
export default  OrderList;

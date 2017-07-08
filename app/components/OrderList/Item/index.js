import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { postComment } from '../../../fetch/user/orderlist.js'

import './style.less';
import Star from '../../Star';
let commentBox = null,
    CommentBoxInput = null,
    commentState = null;
class Item extends Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
         this.state = {
            commentState: 2,  // commentState  0-未评价 1-评价中 2-已评价
            stars: {}
        }
    }
    render() {
        const data = this.props.data;
        return (
            <section className={`clearfix order-item-container`}>
                <div className="order-item-img floatLeft">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment floatRight">
                <button className="btn unseleted-btn">已评价</button>
                </div>
                <div className="order-item-content">
                    <span>商户:{data.title}</span>
                    <span>数量:{data.count}</span>
                    <span>价格:￥{data.price}</span>
                </div>
            </section>
        )
    };

}

export default Item
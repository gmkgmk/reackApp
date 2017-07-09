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
            commentState:0,  // commentState  0-未评价 1-评价中 2-已评价
            stars: {}
        }
    }
    render() {
        const data = this.props.data;
        const commentState = this.state.commentState;
        return (
            <section className={`clearfix order-item-container`}>
                <div className="order-item-img floatLeft">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment floatRight">
                    {
                        commentState === 2 ?
                         <button className="btn unseleted-btn">已评价</button>
                            : (
                                commentState === 1 ?
                                <button className="btn unseleted-btn" onClick={this.showComments.bind(this)}>评价中</button>
                                :<button className="btn unseleted-btn" onClick={this.showComments.bind(this)}>未评价</button>
                            )
                    }
                </div>
                <div className="order-item-content">
                    <span>商户:{data.title}</span>
                    <span>数量:{data.count}</span>
                    <span>价格:￥{data.price}</span>
                </div>
                {
                    commentState === 1 ?
                       <div className="comment-text-container">
                            <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                            <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                                <Star star="0" clickCallback={this.starClickCallback.bind(this)}/>
                            </div>
                            <button className="btn" onClick={this.submitFn.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                       :""
                }
            </section>
        )
    };
    componentDidMount() {
        // 将状态维护到 state 中
        this.setState({
            commentState: this.props.data.commentState
        })
    };
    submitFn() {
        const submitFn = this.props.submitFn.bind(this);
        const id = this.props.data.id;
        const stars = this.state.stars
        const star = stars[id] || '0'
        // 获取评价内容
        const commentText = this.refs.commentText
        const value = commentText.value.trim();
         if (!value) {
            return
        }

        // 执行数据提交,传入id,内容,星数和回调函数,成功后改变comments
        submitFn(id, value, star, this.overComment.bind(this))
    }
    showComments() {
        this.setState({
            commentState:1
        })
    };
    hideComment() {
        this.setState({
            commentState:0
        })
    };
    overComment() {
         this.setState({
            commentState:2
        })
    }
     starClickCallback(star) {
        let stars = this.state.stars
        const id = this.props.data.id
        stars[id] = star

        this.setState({
            stars: stars
        })
    }
}

export default Item
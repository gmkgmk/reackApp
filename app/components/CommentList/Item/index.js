import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../../Star';

import './style.less';

class CommentItem extends Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
  render(){
    const item =this.props.data;
    return(
      <article className="comment-item">
         <h3>
            <i className="icon-user"></i>
            &nbsp;
              {item.username}
            </h3>
            <Star star={item.star}/>
            <p>{item.comment}</p>
      </article>
    )
  }
}
export default CommentItem

import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item';
import './style.less';

class CommentList extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
        const data = this.props.data;
        const ComponentData=data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })
        return (
            <div className="comment-list">
                {ComponentData}
            </div>
        )
    }
}

export default  CommentList;
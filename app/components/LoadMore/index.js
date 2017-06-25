import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.css'
export default class LoadMore extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
       <div className="load-more" ref="wrapper">
          {
              this.props.isLoadingMore
              ? <span>加载中...</span>
              : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
          }
      </div>
    )
  }
  loadMoreHandle(){
      this.props.loadMoreFn();
  }
    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            // 获取一个元素的位置,可读不可写getBoundingClientRect()
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            // 延时50秒执行
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }
}

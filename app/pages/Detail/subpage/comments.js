import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { getCommentData } from '../../../fetch/detail/detai'

import LoadMore from '../../../components/LoadMore'
import ListComponent from '../../../components/CommentList'

import './style.less'

class Comments extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:[],
      hasMore:false,
      isLoadingMore:false,
      page:0
    }
  }
  render(){
    return(
      <section className="detail-comment-subpage">
            <h1>评论列表</h1>
            {
                this.state.data.length
              ?<ListComponent data={this.state.data}/>
              :<p>加载中</p>
            }
            {
                this.state.hasMore
                ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                : ''
            }
      </section>
    )
  };
  componentDidMount(){
    this.getData();
  };
  getData(){
    const id = this.props.id;
    const result = getCommentData(0, id);
    this.resultFn(result);
  };
  resultFn(result){
    result.then(res=>{
      return res.json()
    }).then(json=>{
      const page = this.state.page;
      const hasMore = json.hasMore;
      const data = json.data; 

      this.setState({
          hasMore: hasMore,
          page:page +1 ,
          data: this.state.data.concat(data)//已有和新增的加起来
      })
    }).catch(ex => {
        if (__DEV__) {
            console.error('详情页获取用户评论数据出错, ', ex.message)
        }
    })
  };
  loadMoreData() {
    // 记录状态
    this.setState({
        isLoadingMore: true
    })

    const id = this.props.id
    const page = this.state.page
    const result = getCommentData(page, id)
    this.resultHandle(result)

    // 增加 page 技术
    this.setState({
        isLoadingMore: false
    })
  }
}

export default  Comments;
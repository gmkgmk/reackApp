import React, {
  Component
} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
  connect
} from 'react-redux';

import ListCompoent from '../../../components/HomeList';
import LoadMore from '../../../components/LoadMore';

import {
  getSearchData
} from '../../../fetch/search/search';


const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
}


 class SearchList extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = initialState;
  }
   render() {
        return (
            <section>
            {
                this.state.data.length
                ? <ListCompoent data={this.state.data}/>
                : <div>{ `加载中... `}</div>
            }
            {
                this.state.hasMore
                ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                : ''
            }
            </section>
        )
    }
    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(prevProps, prevState){
        const keyword = this.props.keyWord
        const type = this.props.type

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyWord && type === prevProps.type) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this.getData()
    }
    getData(){
      // 获取首页列表数据
        const cityName = this.props.userinfo.cityName;
        const keyword = this.props.keyWord || '';
        const type = this.props.type;
        console.log(cityName, 0,type, keyword)
        const result = getSearchData(cityName, 0,type, keyword)
        this.resultHandle(result)
    }
    // 处理数据函数
    resultHandle(result){
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.data
            const hasMore = json.hasMore
            // 获取数据后设置
            if (data.length) {
                this.setState({
                    data: this.state.data.concat(data),
                    hasMore: hasMore,
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页列表获取数据报错, ', ex.message)
            }
        })
    }
    loadMoreData(){
         // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName;
        const page = this.state.page;
        const keyword = this.props.keyWord || '';
        const type = this.props.type;
        const result = getSearchData(cityName,page,  type, keyword)
        this.resultHandle(result);

        // 增加 page 技术
        this.setState({
            isLoadingMore: false,
            page: page + 1
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)
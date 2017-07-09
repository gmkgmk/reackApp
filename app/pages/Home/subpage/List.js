import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeList from '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'
import { getListData } from '../../../fetch/home/home'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore:false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
        return (
            <section>
            
            {
                this.state.data.length
                ? <HomeList data={this.state.data}/>
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
    getData(){
      // 获取首页列表数据
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
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

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName, page)
        this.resultHandle(result)

        // 增加 page 技术
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
}

export default List
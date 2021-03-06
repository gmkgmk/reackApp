var app = require('koa')();
var router = require('koa-router')();

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/add.js')
router.get('/api/homead', function* (next) {
    this.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function* (next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});
// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:type/:keyword', function* (next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramstype = params.type
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramstype)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:type', function* (next) {
    // 参数
    const params = this.params;
    const paramsPage = params.page
    const paramsCity = params.city
    const paramstype = params.type

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramstype)

    this.body = searchListData
})


const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function* (next) {
    console.log('详情页 - 商户信息')

    const params = this.params
    const id = params.id
    console.log('商户id: ' + id)

    this.body = detailInfo
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function* (next) {
    console.log('详情页 - 用户点评')

    const params = this.params;
    const page = params.page;
    const id = params.id;

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)
    this.body = detailComment;
})

// 订单列表
const orderList = require('./orderlist/orderlist.js')
router.get('/api/orderlist/:username', function* (next) {
    console.log('用户也 - 用户订单')
    const params = this.params;
    const username = params.username;
    console.log('用户名：' + username)

    this.body = orderList
})

// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})
// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
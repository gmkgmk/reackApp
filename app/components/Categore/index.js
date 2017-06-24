import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import './style.less'

class Categore extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state={
      index:0,
    }
  }
  render(){
    const opt={
      auto:2000,
      callback:(index)=>{
        this.setState({index:index})
      }
    }
    return(
      <section id="home-category">
         <ReactSwipe swipeOptions={opt}>
                <div className="carousel-item">
                   <ul className="clearFix">
                      <li className="floatLeft jingdian">景点</li>
                      <li className="floatLeft ktv">KTV</li>
                      <li className="floatLeft gouwu">购物</li>
                      <li className="floatLeft shenghuofuwu">生活服务</li>
                      <li className="floatLeft jianshenyundong">健身运动</li>
                      <li className="floatLeft meifa">美发</li>
                      <li className="floatLeft qinzi">亲子</li>
                      <li className="floatLeft xiaochikuaican">小吃快餐</li>
                      <li className="floatLeft zizhucan">自助餐</li>
                      <li className="floatLeft jiuba">酒吧</li>
                  </ul>
                </div>
                <div className="carousel-item">
                   <ul className="clearFix">
                        <li className="floatLeft meishi">美食</li>
                        <li className="floatLeft dianying">电影</li>
                        <li className="floatLeft jiudian">酒店</li>
                        <li className="floatLeft xuixianyule">休闲娱乐</li>
                        <li className="floatLeft waimai">外卖</li>
                        <li className="floatLeft huoguo">火锅</li>
                        <li className="floatLeft liren">丽人</li>
                        <li className="floatLeft dujiachuxing">度假出行</li>
                        <li className="floatLeft zuliaoanmo">足疗按摩</li>
                        <li className="floatLeft zhoubianyou">周边游</li>
                    </ul>
                </div>
                <div className="carousel-item">
                  <ul className="clear-fix">
                      <li className="floatLeft ribencai">日本菜</li>
                      <li className="floatLeft SPA">SPA</li>
                      <li className="floatLeft jiehun">结婚</li>
                      <li className="floatLeft xuexipeixun">学习培训</li>
                      <li className="floatLeft xican">西餐</li>
                      <li className="floatLeft huochejipiao">火车机票</li>
                      <li className="floatLeft shaokao">烧烤</li>
                      <li className="floatLeft jiazhuang">家装</li>
                      <li className="floatLeft chongwu">宠物</li>
                      <li className="floatLeft quanbufenlei">全部分类</li>
                  </ul>
                </div>
          </ReactSwipe>
          <aside className="index-container">
            <ul>
              <li className={this.state.index===0?"active":""}></li>
              <li className={this.state.index===1?"active":""}></li>
              <li className={this.state.index===2?"active":""}></li>
            </ul>
          </aside>
      </section>
    )
  }

}

export default  Categore; 
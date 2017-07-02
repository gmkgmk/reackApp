import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router'

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
                   <ul className="clearfix">
                      <Link to="/search/meishi"><li className="floatLeft meishi">美食</li></Link>
                       <Link to="/search/maoyan"><li className="floatLeft maoyan">猫眼</li></Link>
                       <Link to="/search/jiudian"><li className="floatLeft jiudian">酒店</li></Link>
                       <Link to="/search/xuixianyule"><li className="floatLeft xuixianyule">休闲娱乐</li></Link>
                       <Link to="/search/waimai"><li className="floatLeft waimai">外卖</li></Link>
                       <Link to="/search/huoguo"><li className="floatLeft huoguo">火锅</li></Link>
                       <Link to="/search/liren"><li className="floatLeft liren">丽人</li></Link>
                       <Link to="/search/zhoubianyou"><li className="floatLeft zhoubianyou">周边游</li></Link>
                       <Link to="/search/jiehun"><li className="floatLeft jiehun">结婚</li></Link>
                       <Link to="/search/ktv"><li className="floatLeft ktv">KTV</li></Link>
                  </ul>
                </div>
                <div className="carousel-item">
                   <ul className="clearfix">
                      <Link to="/search/shenghuofuwu"><li className="floatLeft shenghuofuwu">生活服务</li></Link>
                      <Link to="/search/jingdian"><li className="floatLeft jingdian">景点</li></Link>
                      <Link to="/search/jianshenyundong"><li className="floatLeft jianshenyundong">健身运动</li></Link>
                      <Link to="/search/gouwu"><li className="floatLeft gouwu">购物</li></Link>
                      <Link to="/search/aiche"><li className="floatLeft aiche">爱车</li></Link>
                      <Link to="/search/qinzi"><li className="floatLeft qinzi">亲子</li></Link>
                      <Link to="/search/jiazhuang"><li className="floatLeft jiazhuang">家装</li></Link>
                      <Link to="/search/xuexipeixun"><li className="floatLeft xuexipeixun">学习培训</li></Link>
                      <Link to="/search/yiliaojiankang"><li className="floatLeft yiliaojiankang">火车机票</li></Link>
                      <Link to="/search/daojia"><li className="floatLeft daojia">美发</li></Link>
                    </ul>
                </div>
                <div className="carousel-item">
                  <ul className="clearfix">
                      <Link to="/search/zizhucan"><li className="floatLeft zizhucan">自助餐</li></Link>
                      <Link to="/search/ribenliaoli"><li className="floatLeft ribenliaoli">日本菜</li></Link>
                      <Link to="/search/meifa"><li className="floatLeft meifa">美发</li></Link>
                      <Link to="/search/meijiameijie"><li className="floatLeft meijiameijie">美甲美睫</li></Link>
                      <Link to="/search/spa"><li className="floatLeft spa">美容SPA</li></Link>
                      <Link to="/search/shoushenxianti"><li className="floatLeft shoushenxianti">瘦身纤体</li></Link>
                      <Link to="/search/qinzisheying"><li className="floatLeft qinzisheying">亲子摄影</li></Link>
                      <Link to="/search/qinziyoule"><li className="floatLeft qinziyoule">亲子游乐</li></Link>
                      <Link to="/search/youerjiaoyu"><li className="floatLeft youerjiaoyu">幼儿教育</li></Link>
                      <Link to="/search/more"><li className="floatLeft more">全部分类</li></Link>
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
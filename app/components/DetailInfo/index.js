import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../components/Star'

import './style.less'

class DetailInfo extends Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const data = this.props.data

        return (
            <div id="detail-info-container">
                <div className="info-container clearfix">
                    <figure className="info-img-container">
                        <img src={data.img}/>
                    </figure>
                        <div className="title-content">
                            <span className="price">￥{data.price}</span>
                            <p className="sub-title floatRight">{data.subTitle}</p>
                        </div>
                        <aside className="info-content clearfix">
                            <div className=" floatLeft">
                                <h3>{data.title}</h3>
                                {/* 引用 Star 组件 */}
                                <Star star={data.star} />
                            </div>
                        {/* 设置 innerHTML dangerouslySetInnerHTML会把标签自动识别*/}
                        <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc floatRight"></p>
                    </aside>
                </div>
                
             
            </div>
        )
    }
}

export default DetailInfo
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取 star 数量，并取余5（最多5个star,大于5则取余）
        let star = this.props.star || 0
        if (star > 5) {
            star = star % 5
        }
        const stars =[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass =( star >= item )? ' light' : ''
                    return <i key={index} className={'icon-star' + lightClass}></i>
                    })
        return (
            <div className="star-container">
                {stars}
            </div>
        )
    }
}

export default Star
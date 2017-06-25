import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-item clearfix">
                <div className="item-img-container floatLeft">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clearfix">
                        <h3 className="floatLeft">{data.title}</h3>
                        <span className="floatRight">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clearfix">
                        <span className="price floatLeft">￥{data.price}</span>
                        <span className="mumber floatRight">已售{data.mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem
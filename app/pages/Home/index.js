import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Categore from '../../components/Categore';
import AD from './subpage/Ad';
import List from './subpage/List';
import Welcome from "../welcome";

class Home extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      isRender: false,
    }
  }
  render() {
    const isRender = this.state.isRender;
    return(
     <main>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Categore/>
        
        {isRender ?
          (<section><AD />
            <List cityName={this.props.userinfo.cityName} />
            </section>)
          : (<Welcome />)}
     </main>
    )
  };
  componentDidMount() {
    // 没有数据则模拟
      setTimeout(function () {
        this.setState({
          isRender: true
        })
      }.bind(this),500)
    }
}


function mapStateToProps(state){
  return {
      userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
   return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
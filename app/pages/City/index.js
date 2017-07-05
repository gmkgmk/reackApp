import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalStore from '../../util/localStoryKey';
import {CITYNAME} from '../../config/localStoreKey';
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOther from '../../actions/userInfo'
import Header from "../../components/Header";
import ChooseCityName from "../../components/chooseCityName";
import CityList from "../../components/cityList";

 class City extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <section>
        <Header title="选择城市"/>
        <ChooseCityName cityName={this.props.userinfo.cityName}/>
        <CityList changeCityFn={this.changeCityFn.bind(this)}/>
      </section>
    )
  }
  changeCityFn(newCity){
    if(newCity == null) return;
    // 修改redux 先把redux离得userinfo获取出来,修改,在保存
    const userinfo =this.props.userinfo;
    userinfo.cityName = newCity;
    this.props.userInfoActions.update(userinfo)
    // localStorage
    LocalStore.setItem(CITYNAME,newCity);

    hashHistory.push('/')
  }
}

function mapStateToProps(state){
  return {
      userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
   return {
    userInfoActions: bindActionCreators(userInfoActionsFromOther,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);

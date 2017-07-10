import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStoryKey';
import {CITYNAME} from '../config/localStoreKey';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOther from '../actions/userInfo';
import Welcome from '../pages/404';
import '../static/style/common.less';


 class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state={
      initDone:false,
    }
  }
  render() {
    return(
     <div>
        {
          this.state.initDone
          ? this.props.children
          : <Welcome/>}
     </div>
    )
  }
  componentDidMount() {
    console.log(this.props.children)
    // 从localstoring里面获取城市
    let cityName =LocalStore.getItem(CITYNAME);
    //返回的为undefined字符串!
    if(cityName=="undefined"||cityName==null){
      cityName='北京';
    }
    this.props.userInfoActions.update({
      cityName:cityName
    })
      this.setState({
        initDone:true
    })
  }
}

function mapStateToProps(state){
  return {
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
)(App);
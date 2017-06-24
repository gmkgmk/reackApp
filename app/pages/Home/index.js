import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Categore from '../../components/Categore';


class Home extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
     <main>
        <Header cityName={this.props.userinfo.cityName}/>
        <Categore/>
     </main>
    )
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
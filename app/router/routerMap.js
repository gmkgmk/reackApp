import React, { Component } from 'react';
import { HashRouter as Router , Route, Switch, Redirect } from 'react-router-dom';

import App from '../pages';
import Home from '../pages/Home';
import City from '../pages/City';
import User from '../pages/User';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import NotFound from '../pages/404';


class RouterMap extends Component {
    render() {
        return (
            <Router>
              <Switch>    
                    <MainRouter />
                </Switch>    
            </Router>
        )
    }
}

const MainRouter = () => {
    return (
        <App>      
            <Switch>   
                
                <Route exact  path='/index' component={Home} />
                <Route exact path='/city' component={City}/>
                <Route exact path='/User' component={User}/>
                <Route  path={`/search/:type/:keyword?`} component={Search}/>
                <Route  path='/detail/:id' component={Detail}/>
                <Route  path={`/login/:router?`} component={Login} />    
                 <Route exact path="/" render={() => (
                        <Redirect to="/index"/>
                    )}/>   
                <Route component={NotFound} /> 
            </Switch>
        </App>
    )
}

export default RouterMap

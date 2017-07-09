import React, { Component } from 'react';
import { HashRouter as Router , Route, Switch, Redirect ,StaticRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const hashHistory = createBrowserHistory();
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
            <Router history={hashHistory}>
                <App>      
                    <Switch>   
                        <Route exact  path='/' component={Home} />
                        <Route path='/city' component={City}/>
                        <Route path='/User' component={User}/>
                        <Route path='/search/:type(/:keyword)' component={Search}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/login(/:router)' component={Login} />    
                        <Route  component={NotFound} /> 
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default RouterMap

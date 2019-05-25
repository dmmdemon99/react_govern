import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import Layout from './layout.js';

import {Home} from './home';
import Banner from './banner';
import Login from './login';
import News from './news';
import Newsinfo from './newsinfo';
export class App extends React.Component{
    render(){
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/banner" component={Banner}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/news" component={News}/>
                    <Route path="/newsinfo" component={Newsinfo}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}
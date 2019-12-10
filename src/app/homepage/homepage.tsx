import React, { Component } from 'react';
import Dashboard from './dashboard/dashboard';
import { Route, Switch } from 'react-router';
import Login from '../../admins/login';


export default class Homepage extends Component {
    public state: any = {
        isAuth: true
    };

    render(): React.ReactNode {
        return (
            <div>
                <Switch>
                <Route path='/login' exact component={Login}/>
                <Route path='/' component={this.state.isAuth ? Dashboard : Login}/>
                </Switch>
            </div>
        );
    }
}


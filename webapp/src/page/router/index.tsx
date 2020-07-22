import React from 'react';
import { BrowserRouter as Router, Switch, withRouter, Route, Redirect } from "react-router-dom";
import NotFound from '@/page/common/error';

import Login from '@/page/components/login';
import App from '@/page/components';
export interface RootRouterProps {
}

export interface RootRouterState {

}

class RootRouter extends React.Component<RootRouterProps, RootRouterState> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/login' component={Login} />
                    <Route path='/system' component={App} />
                    <Route path='/news' component={App} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default RootRouter;

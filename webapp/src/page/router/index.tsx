import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from '@/page/common/error';

import Login from '@/page/components/login';
import App from '@/page/components';

export default function RouterMap() {
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
    )
}

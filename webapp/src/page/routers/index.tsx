import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import App from '@/page/components/App';

const Root = (props: any) => (
    <Switch>
        <Route />
        <Route path='/' >
            <Switch>
                <Route component={App} />
            </Switch>
        </Route>
    </Switch>
)

export default Root;

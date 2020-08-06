import React from 'react';
import { Switch, Route } from "react-router-dom";
import contentRouter from '@/page/router/routerMap';

export default function ContentRouter() {
    return (
        <Switch>
            {contentRouter.map((item, index) => {
                return <Route key={index} path={item.path} render={() => (
                    <item.component />
                )} />
            })}
        </Switch>
    );
}

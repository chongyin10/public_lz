import React from 'react';
import { Switch, Route } from "react-router-dom";

import { contentRouter } from '@/page/router/routerMap';

export interface ContentRouterProps {
}

export interface ContentRouterState {

}

class ContentRouter extends React.Component<ContentRouterProps, ContentRouterState> {
    render() {
        return (
            <Switch>
                {contentRouter.map((item, index) => {
                    return <Route key={index} path={item.path} render={props => (
                        <item.component {...this.props} {...props} />
                    )} />
                })}
            </Switch>
        );
    }
}

export default ContentRouter;

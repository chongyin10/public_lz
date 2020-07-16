import React from 'react';
import { BrowserRouter as Router, Switch, withRouter, Route, Redirect } from "react-router-dom";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TestDispatch from '@/page/redux/test';
import * as LoginDispatch from '@/page/redux/login';
import * as ComDispatch from '@/page/redux/common';

import Routers from '@/page/router/routerMap';
import NotFound from '../common/notFound';

import { UserList } from '../interface/user';

export interface RootRouterProps {
    login?: UserList;
}

export interface RootRouterState {

}

class RootRouter extends React.Component<RootRouterProps, RootRouterState> {
    constructor(props: RootRouterProps) {
        super(props);
        this.state = {};
    }

    render() {
        let { login } = this.props;
        return (
            <Router>
                <Switch>
                    {Routers.map((item, index) => {
                        return <Route key={index} exact path={item.path} render={props =>
                            (!item.auth ? (login && login.length > 0 ? <Redirect to='/' {...this.props} /> : <item.component {...this.props} {...props} />) : (login && login.length > 0 ? <item.component {...this.props} {...props} /> : <Redirect to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                }
                            }} />)
                            )} />
                    })}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state: any) => ({
    login: state.RLogin.login,
    loading: state.RCom.loading
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    ...LoginDispatch,
    ...TestDispatch,
    ...ComDispatch,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);

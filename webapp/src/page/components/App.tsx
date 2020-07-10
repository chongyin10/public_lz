import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadable from '@loadable/component';  // 按需加载Router
import { withRouter, RouteComponentProps } from 'react-router-dom';

import WebApp from '@/page/common';
import LoginRouter from '@/page/routers/login';

import { getItems, getRegisterList, getSubMenus, setChiItemOpenKey } from '@/page/redux/app';
import { pathnameParser } from '@/page/utils/common';

import './app.scss';
import { Spin, Alert } from 'antd';
import { UserInfo } from '../interface/user';
import { forEach } from 'lodash';

export interface IProps extends RouteComponentProps {
    personalItemKey?: string;
    userInfo?: any,
    skin?: boolean,
}

interface State {
}
class App extends React.Component<IProps, State>{

    componentDidMount() {
        let { sessionUserInfo } = window.sessionStorage;
        if ( sessionUserInfo === "") {
            this.props.history.replace('/login')
        }
    }

    render() {
        let { userInfo, skin } = this.props;
        let { sessionUserInfo } = window.sessionStorage;
        let { pathname } = this.props.history.location;
        // console.log('@skin:', skin)
        if ((userInfo && userInfo.length > 0)) {
            pathname = '/';  // 若是登录成功，重新定义路由根
        }
        return (
            <Spin spinning={(false)} delay={1}>
                <div className='_app' style={{ height: '100%', width: "100%" }}>
                    {
                        (pathname.indexOf('login') < 0 && sessionUserInfo != "") ? <WebApp /> : <LoginRouter />
                    }
                </div>
            </Spin>
        )
    }
}

const mapStateToProps = (state: any) => ({
    personalItemKey: state.RApp.personalItemKey,
    userInfo: state.RSys.userInfo,
    skin: state.RSys.skin,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
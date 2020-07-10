import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadable from '@loadable/component';  // 按需加载Router
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { getItems, getRegisterList, getSubMenus, setChiItemOpenKey } from '@/page/redux/app';
import VHeader from '@/page/common/header/VHeader';
import VSide from '@/page/common/sider/VSide';
import VLayout from '@/page/common/layout/VLayout';
import VFooter from '@/page/common/footer/VFooter';
import { pathnameParser } from '../utils/common';
import { setUsers } from '../redux/system';

export interface WebAppProps extends RouteComponentProps {
    personalItemKey?: string;
    userInfo?: any,
    skin?: boolean,
    onGetItems(param: number, callback: () => void): void;
    onGetRegisterList({ }, callback: () => void): void;
    onGetSubMenus(level: number, menuItem: number, callback: () => void): void;
    onSetUsers(userInfo: any, callback: () => void): void;
}

export interface WebAppState {

}

class WebApp extends React.Component<WebAppProps, WebAppState> {
    constructor(props: WebAppProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        this.props.onGetItems(0, () => { });
        this.props.onGetRegisterList({}, () => { });
        let { pathname } = this.props.history.location;
        if (pathname.indexOf('login') > 0) {
            this.props.history.replace('/')
        }
        pathnameParser(pathname)
        let { itemOpenKey, subItemOpenKey, chiItemOpenKey, sessionUserInfo } = window.sessionStorage;
        if (itemOpenKey != null && itemOpenKey != "null") {
            this.props.onGetSubMenus(1, itemOpenKey, () => { });
            if (subItemOpenKey != null && subItemOpenKey != "null") {
                this.props.onGetSubMenus(2, subItemOpenKey, () => { });
            }
            this.props.history.push(pathname)
        }
        if (this.props.userInfo.length === 0) {
            this.props.onSetUsers(JSON.parse(sessionUserInfo), () => { });  // 刷新游览器会使登录user丢失，获取session中userInfo重新赋值给redux
        }
    }

    render() {
        return (
            <Layout>
                <VHeader />
                <Layout>
                    <VSide />
                    <VLayout />
                </Layout>
                <VFooter />
            </Layout>
        );
    }
}

const mapStateToProps = (state: any) => ({
    personalItemKey: state.RApp.personalItemKey,
    userInfo: state.RSys.userInfo,
    skin: state.RSys.skin,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetItems: getItems,
    onGetRegisterList: getRegisterList,
    onGetSubMenus: getSubMenus,
    onSetUsers: setUsers
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebApp));

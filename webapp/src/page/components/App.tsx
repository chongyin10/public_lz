import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadable from '@loadable/component';  // 按需加载Router
import { withRouter, RouteComponentProps } from 'react-router-dom';

import VHeader from '@/page/common/header/VHeader';
import VSide from '@/page/common/sider/VSide';
import VLayout from '@/page/common/layout/VLayout';
import VFooter from '@/page/common/footer/VFooter';

import { getItems, getRegisterList, getSubMenus, setChiItemOpenKey } from '@/page/redux/app';
import { pathnameParser } from '@/page/utils/common';

import './app.scss';



export interface IProps extends RouteComponentProps {
    dispatch?: any;
    onGetItems(param: number, callback: () => void): void;
    onGetRegisterList({ }, callback: () => void): void;
    onGetSubMenus(level: number, menuItem: number, callback: () => void): void;
}

interface State {
}
class App extends React.Component<IProps, State>{

    componentDidMount() {
        this.props.onGetItems(0, () => { });
        this.props.onGetRegisterList({}, () => { });
        let { pathname } = this.props.history.location;
        pathnameParser(pathname)
        let { itemOpenKey, subItemOpenKey, chiItemOpenKey } = window.sessionStorage;
        if (itemOpenKey != null && itemOpenKey != "null") {
            this.props.onGetSubMenus(1, itemOpenKey, () => { });
            if (subItemOpenKey != null && subItemOpenKey != "null") {
                this.props.onGetSubMenus(2, subItemOpenKey, () => { });
            }
            this.props.history.push(pathname)
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
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetItems: getItems,
    onGetRegisterList: getRegisterList,
    onGetSubMenus: getSubMenus,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
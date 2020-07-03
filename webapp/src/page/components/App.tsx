import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadable from '@loadable/component';  // 按需加载Router

import VHeader from '@/page/common/header/VHeader';
import VSide from '@/page/common/sider/VSide';
import VLayout from '@/page/common/layout/VLayout';
import VFooter from '@/page/common/footer/VFooter';

import { getItems, getRegisterList } from '@/page/redux/app';

import './app.scss';

export interface IProps {
    dispatch?: any;
    onGetItems(param: number, callback: () => void): void;
    onGetRegisterList({ }, callback: () => void): void
}

interface State {
}
class App extends React.Component<IProps, State>{

    componentDidMount() {
        this.props.onGetItems(0, () => { });
        this.props.onGetRegisterList({}, () => { });
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
    onGetRegisterList: getRegisterList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from "react";
import { Layout, Button, notification, Divider, Space } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadiusBottomrightOutlined } from '@ant-design/icons';

import Header from '@/page/common/header';
import Footer from '@/page/common/footer';
import Sider from '@/page/common/sider';
import Content from '@/page/common/content';

import '@/page/common/index.scss';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { loginInterceptor } from "@/page/utils/interceptor";
import { initLoginNotification } from "@/page/redux/login";
import { dateFormat } from "@/page/utils//date";
export interface LayoutAppProps extends RouteComponentProps {
    loginNotification?: Boolean;
    login?: any;
    onInitLoginNotification(loginNotification: Boolean): void;
}

export interface LayoutAppState {

}
class LayoutApp extends React.Component<LayoutAppProps, LayoutAppState> {

    UNSAFE_componentWillMount() {
        loginInterceptor(this.props);
        let { login, loginNotification } = this.props;
        if (login && login.length > 0 && !loginNotification) {
            this.openNotification(login);
            this.props.onInitLoginNotification(true)
        }
    }

    openNotification = (prarm: any) => {
        notification.success({
            message: '登录成功',
            placement: 'bottomRight',
            description: <div><div>登录用户: {prarm[0]["name"]}</div><div>上次登录时间：{dateFormat('YYYY-mm-dd HH:MM:SS', new Date(prarm[0]['lastTime']))}</div></div>,
            duration: 5
        });
    };

    render() {
        return (
            <Layout>
                <Header />
                <Layout>
                    <Sider />
                    <Content />
                </Layout>
                <Footer />
            </Layout>
        );
    }
}

const mapStateToProps = (state: any) => ({
    login: state.RLogin.login,
    loginNotification: state.RLogin.loginNotification
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onInitLoginNotification: initLoginNotification
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutApp));
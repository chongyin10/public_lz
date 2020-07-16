import React from "react";
import { Layout, Menu, Avatar, Dropdown, Button, Divider } from 'antd';
import { Link } from "react-router-dom";

import LogPng from '../../static/images/logo.png';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '@/page/common/header/index.scss';
import { compose } from "redux";

const { Header } = Layout;

export interface HeaderProps {
    initLoginUser(callback: () => void): void;
}

export interface HeaderState {

}

class VHeader extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {};
    }

    exeHanderClick = ({ key, keypatch }: any) => {
        let { location, history }: any = this.props;
        if (key.indexOf('login') > -1) {
            this.props.initLoginUser(() => { });
            history.replace(`/${key}`);
        }
    }

    render() {

        const menu = (
            <Menu onClick={this.exeHanderClick.bind(this)}>
                <Menu.Item key='userinfo'>
                    <span>用户信息</span>
                </Menu.Item>
                <Menu.Item key='settings'>
                    <span>setting</span>
                </Menu.Item>
                <hr />
                <Menu.Item key='login' icon={<LogoutOutlined />}>
                    <span>退出</span>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header className="header">
                <div className="logo">
                    <img src={LogPng} style={{ height: '30px', width: '30px', margin: '0 24px 0 0' }}></img>
                </div>
                <div className='top-title'>
                    <span className='log-title'>众昕阅读</span>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">系统管理</Menu.Item>
                    <Menu.Item key="2">书籍管理</Menu.Item>
                </Menu>
                <div className='userlogin'>
                    <Avatar icon={<UserOutlined />} />
                    <span className='usercore'>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>个人中心</Button>
                        </Dropdown>
                    </span>
                </div>
            </Header>
        );
    }
}

export default VHeader;
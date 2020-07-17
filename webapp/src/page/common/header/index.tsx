import React from "react";
import { Layout, Menu, Avatar, Dropdown, Button, Divider } from 'antd';
import { Link } from "react-router-dom";

import LogPng from '../../static/images/logo.png';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '@/page/common/header/index.scss';
import { compose } from "redux";

const { Header } = Layout;

export interface HeaderProps {
    perItem?: any[];
    moduleList?: any;
    initLoginUser(callback: () => void): void;
    moudleKeyAll(moudleKeyAll: any, callback: () => void): void;
}

export interface HeaderState {

}

class VHeader extends React.Component<HeaderProps, HeaderState> {

    exeHanderClick = ({ key, keypatch }: any) => {
        let { location, history }: any = this.props;
        if (key.indexOf('login') > -1) {
            this.props.initLoginUser(() => { });
            history.replace(`/${key}`);
        }
    }

    onHandlerClick = ({ key }: any) => {
        this.props.moudleKeyAll({ oneLevelKey: key }, () => { })
    }

    overlayMenu = () => {
        let { perItem } = this.props;
        let chiItems = [];
        if (perItem && perItem.length > 0) {
            for (let pre of perItem) {
                chiItems.push(<Menu.Item key={pre['key']}><span>{pre['title']}</span></Menu.Item>)
                if (pre['hrBottom']) {
                    chiItems.push(<hr key='hr' />);
                }
            }
        }
        return (<Menu key='chiItems' onClick={this.exeHanderClick.bind(this)}>{chiItems}</Menu>)
    }

    htmlMenu = () => {
        let { moduleList } = this.props;
        let moduleArray = [];
        for (let module of moduleList) {
            moduleArray.push(<Menu.Item key={module['identification']}>{module['name']}</Menu.Item>);
        }
        return (<Menu key='dark' theme="dark" mode="horizontal" onClick={this.onHandlerClick.bind(this)}>{moduleArray}</Menu>)
    }

    render() {

        return (
            <Header className="header">
                <div className="logo">
                    <img src={LogPng} style={{ height: '30px', width: '30px', margin: '0 24px 0 0' }}></img>
                </div>
                <div className='top-title'>
                    <span className='log-title'>众昕阅读</span>
                </div>
                {this.htmlMenu()}
                <div className='userlogin'>
                    <Avatar icon={<UserOutlined />} />
                    <span className='usercore'>
                        <Dropdown overlay={this.overlayMenu} placement="bottomCenter">
                            <Button>个人中心</Button>
                        </Dropdown>
                    </span>
                </div>
            </Header>
        );
    }
}

export default VHeader;
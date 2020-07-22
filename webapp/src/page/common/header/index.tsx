import React from "react";
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LogPng from '@/page/static/images/logo.png';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '@/page/common/header/index.scss';
import { initLoginUser, initLoginNotification } from "@/page/redux/login";
import { oneLevelKeyFun, initModules, twoLevelKeyFun, threeLevelKeyFun } from "@/page/redux/common";

const { Header } = Layout;

export interface HeaderProps extends RouteComponentProps {
    perItem?: any[];
    moduleList?: any;
    onInitLoginUser(): void;
    onOneLevelKeyFun(moudleKeyAll: any): void;
    onTwoLevelKeyFun(twoLevelKey: any): void;
    onThreeLevelKeyFun(threeLevelKey: any): void;
    onInitModules(): void;
    onInitLoginNotification(loginNotification: Boolean): void;
}

export interface HeaderState {
    oneLevelKey: any;
}

class VHeader extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            oneLevelKey: '0'
        }
    }

    exeHanderClick = ({ key, keypatch }: any) => {
        let { location, history }: any = this.props;
        if (key.indexOf('login') > -1) {
            this.props.onInitLoginUser();
            this.props.onInitModules();
            this.props.onOneLevelKeyFun(null);
            this.props.onTwoLevelKeyFun(null);
            this.props.onThreeLevelKeyFun(null);
            this.props.onInitLoginNotification(false)
            history.replace(`/${key}`);
        }
    }

    onHandlerClick = ({ key }: any) => {
        this.props.onOneLevelKeyFun(key);
        this.setState({
            oneLevelKey: key
        })
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
        return (<Menu key='chiItems' onClick={this.exeHanderClick}>{chiItems}</Menu>)
    }

    htmlMenu = () => {
        let { moduleList } = this.props;
        let moduleArray = [];
        for (let module of moduleList) {
            moduleArray.push(<Menu.Item key={module['identification']}><Link to={module['url']} >{module['name']}</Link ></Menu.Item>);
        }
        return (<Menu key='dark' defaultSelectedKeys={[String(this.state.oneLevelKey)]} theme="dark" mode="horizontal" onClick={this.onHandlerClick}>{moduleArray}</Menu>)
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


const mapStateToProps = (state: any) => ({
    perItem: state.RCom.perItem,
    moduleList: state.RCom.moduleList,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onInitLoginUser: initLoginUser,
    onOneLevelKeyFun: oneLevelKeyFun,
    onInitModules: initModules,
    onTwoLevelKeyFun: twoLevelKeyFun,
    onThreeLevelKeyFun: threeLevelKeyFun,
    onInitLoginNotification: initLoginNotification
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VHeader));

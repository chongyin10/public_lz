import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Layout, Menu, Dropdown, Button } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const { Header } = Layout;

import LogPng from '../../static/images/logo.png';
import { IMenu, Meuns, IApp } from '@/page/interface/app';
import { getSubMenus, setItemOpenKey, onModalStatus, setPersonalItemKey, onModalOption } from '@/page/redux/app';
import '@/page/common/header/vheader.scss';

export interface IProps extends RouteComponentProps {
    itemList?: IMenu;
    itemOpenKey?: IApp;
    defaultSelectedKeys?: string;
    subItemOpenKey?: string;
    chiItemOpenKey?: string;
    modalVisible?: boolean;
    onGetSubMenus(level: number, menuItem: number, callback: () => void): void;
    onSetItemOpenKey(itemOpenKey: string, callback: () => void): void;
    onModalStatus(modalVisible: boolean, callback: () => void): void;
    onSetPersonalItemKey(personalItemKey: string, callback: () => void): void;
    onModalOption(modalOtherOption: any, callback: () => void): void;
}

interface State {
}


/**
 * Header头部通用类
 */

class VHeader extends React.Component<IProps, State> {

    constructor(props: IProps) {
        super(props);
    }

    onHandlerClick = (items: any) => {
        let { key, keyPath } = items;
        let level: any = 0;
        this.props.itemList?.forEach(item => {
            if (item.id === Number(key)) {
                level = Number(item.level) + 1
            }
        });
        this.props.onGetSubMenus(level, key, () => { });
        this.props.onSetItemOpenKey(String(key), () => { });
        window.sessionStorage.setItem('itemOpenKey', key);
    }

    exeMenusHtml = () => {
        let { itemList } = this.props;
        let menuItem = itemList?.map((item, index) => {
            return <Menu.Item key={index} onClick={this.onHandlerClick.bind(this)} key={item.id}><Link to={item.url || ""}>{item.name}</Link> </Menu.Item>
        })
        let { pathname } = this.props.history.location;
        let defaultSelectedKeys = undefined;
        if (pathname !== '/') {
            defaultSelectedKeys = window.sessionStorage.getItem("itemOpenKey");
        }
        return <Menu defaultSelectedKeys={[String(defaultSelectedKeys)]} theme="dark" mode="horizontal" >{menuItem}</Menu>;
    }

    onMenuHandlerClick = ({ key }: any) => {
        if (key !== 'login') {
            this.props.onModalStatus(true, () => { });
        }
        if (key === 'userhub') {
            this.props.onModalOption({
                title: '个人中心'
            }, () => { })
        } else if (key === 'settings') {
            this.props.onModalOption({
                title: 'settings设置'
            }, () => { })
        }
        this.props.onSetPersonalItemKey(key, () => { });

    }

    render() {

        const menu = (
            <Menu onClick={this.onMenuHandlerClick}>
                <Menu.Item key='userhub'>
                    <span>用户信息</span>
                </Menu.Item>
                <Menu.Item key='settings'>
                    <span>settings设置</span>
                </Menu.Item>
                <Menu.Item key='login'>
                    <Link to="/login">退出</Link>
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
                {this.exeMenusHtml()}
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

const mapStateToProps = (state: any) => ({
    itemList: state.RApp.itemList,
    itemOpenKey: state.RApp.itemOpenKey,
    defaultSelectedKeys: state.RApp.defaultSelectedKeys,
    subItemOpenKey: state.RApp.subItemOpenKey,
    chiItemOpenKey: state.RApp.chiItemOpenKey,
    modalVisible: state.RApp.modalVisible,

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetSubMenus: getSubMenus,
    onSetItemOpenKey: setItemOpenKey,
    onModalStatus: onModalStatus,
    onSetPersonalItemKey: setPersonalItemKey,
    onModalOption: onModalOption
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VHeader));



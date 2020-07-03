import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const { Header } = Layout;

import LogPng from '../../static/images/logo.png';
import { IMenu, Meuns, IApp } from '@/page/interface/app';
import { getSubMenus, setItemOpenKey } from '@/page/redux/app';

export interface IProps extends RouteComponentProps{
    itemList?: IMenu;
    itemOpenKey?: IApp;
    defaultSelectedKeys?: string;
    subItemOpenKey?: string;
    chiItemOpenKey?: string;
    onGetSubMenus(level: number, menuItem: number, callback: () => void): void;
    onSetItemOpenKey(itemOpenKey: string, callback: () => void): void;
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
        
    }

    exeMenusHtml = () => {
        let { itemList } = this.props;
        let menuItem = itemList?.map((item, index) => {
            return <Menu.Item onClick={this.onHandlerClick.bind(this)} key={item.id}><Link to={item.url || ""}>{item.name}</Link> </Menu.Item>
        })
        return <Menu theme="dark" mode="horizontal" >{menuItem}</Menu>;
    }

    render() {

        console.log(`@默认key：${this.props.defaultSelectedKeys}`)
        console.log(`@根key：${this.props.itemOpenKey}`);
        console.log(`@一级key：${this.props.subItemOpenKey}`)
        console.log(`@二级key：${this.props.chiItemOpenKey}`);
        console.log("@路由：", this.props.history)

        return (
            <Header className="header">
                <div className="logo">
                    <img src={LogPng} style={{ height: '30px', width: '30px', margin: '0 24px 0 0' }}></img>
                </div>
                <div className='top-title'>
                    <span className='log-title'>众昕阅读</span>
                </div>
                {this.exeMenusHtml()}
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
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetSubMenus: getSubMenus,
    onSetItemOpenKey: setItemOpenKey,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VHeader));



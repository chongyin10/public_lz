import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { getSubMenus, setSubItemOpenKey, setChiItemOpenKey } from '@/page/redux/app';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { IMenu, Meuns } from '@/page/interface/app';
import { pathnameParser } from '@/page/utils/common';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface IProps extends RouteComponentProps {
    subItemList?: IMenu;
    childrenItemList?: IMenu;
    subItemOpenKey?: string;
    chiItemOpenKey?: string;
    onGetSubMenus(level: number, menuItem: number, callback: () => void): void;
    onSetSubItemOpenKey(subItemOpenKey: string, callback: () => void): void;
    onSetChiItemOpenKey(chiItemOpenKey: string, callback: () => void): void
}

interface IState {
}

/**
 * Side二级目录类
 */
class VSide extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    handleTitleClick = (event: any) => {
        let { key } = event;
        let { subItemOpenKey, chiItemOpenKey } = window.sessionStorage;
        if (subItemOpenKey != key) {
            let { subItemList } = this.props;
            let childrenItem: Meuns = {};
            subItemList?.forEach((item) => {
                if (item.id === Number(key)) {
                    childrenItem = item;
                }
            })
            if (childrenItem) {
                this.props.onGetSubMenus(Number(childrenItem.level) + 1, Number(key), () => { });
            }
        } else {
            // key = null;
            // window.sessionStorage.setItem("chiItemOpenKey", key);
            let { pathname } = this.props.history.location;
            pathnameParser(pathname)
        }
        this.props.onSetSubItemOpenKey(String(key), () => { });
        window.sessionStorage.setItem("subItemOpenKey", key);
    }

    handleClick = (obj: any) => {
        let { key } = obj;
        this.props.onSetChiItemOpenKey(String(key), () => { });
        window.sessionStorage.setItem("chiItemOpenKey", key);
    }

    handleSubItemHTML = () => {
        let { subItemList, childrenItemList } = this.props;
        return subItemList?.map((item, index) => {
            let _chiItems: any = [];
            childrenItemList?.forEach((chiItem) => {
                _chiItems.push(<Menu.Item key={chiItem.id} onClick={this.handleClick.bind(this)}><Link to={String(chiItem.url)}></Link>{chiItem.name}</Menu.Item>);
            })
            return <SubMenu key={item.id} onTitleClick={this.handleTitleClick.bind(this)} icon={<LaptopOutlined />} title={item.name}>{_chiItems}</SubMenu>
        })
    }

    render() {
        let { pathname } = this.props.history.location;
        let { subItemOpenKey, chiItemOpenKey } = window.sessionStorage;
        let defaultOpenKeys, defaultSelectedKeys = undefined;
        if (pathname !== "/") {
            defaultOpenKeys = subItemOpenKey;
            defaultSelectedKeys = chiItemOpenKey == "null" ? '0' : chiItemOpenKey;
        }
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    openKeys={[String(defaultOpenKeys)]}
                    selectedKeys={[String(defaultSelectedKeys)]}
                >
                    {this.handleSubItemHTML()}
                </Menu>
            </Sider>
        );
    }
}

const mapStateToProps = (state: any) => ({
    subItemList: state.RApp.subItemList,
    childrenItemList: state.RApp.childrenItemList,
    subItemOpenKey: state.RApp.subItemOpenKey,
    chiItemOpenKey: state.RApp.chiItemOpenKey
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetSubMenus: getSubMenus,
    onSetSubItemOpenKey: setSubItemOpenKey,
    onSetChiItemOpenKey: setChiItemOpenKey,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VSide));


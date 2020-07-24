import React from "react";
import { Layout, Menu } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { twoLevelKeyFun, threeLevelKeyFun } from "@/page/redux/common";
import { getApiUtils } from "@/page/utils/common";
import { getUserAll } from "@/page/redux/user";
import { User } from "@/page/interface/user";

const { SubMenu } = Menu;
const { Sider } = Layout;
export interface SiderProps {
    moduleList?: any;
    oneLevelKey?: any;
    twoLevelKey?: string;
    threeLevelKey?: string;
    twoLevelKeyFun(twoLevelKey: any, callback: () => void): void;
    threeLevelKeyFun(threeLevelKey: any, callback: () => void): void;
    getUserAll(user: User, page?: Number): void;
}

export interface SiderState {
    defaultSelectedKeys: string;
    defaultOpenKeys: string;
}

class VSider extends React.Component<SiderProps, SiderState> {
    constructor(props: SiderProps) {
        super(props);
        this.state = {
            defaultSelectedKeys: '0',
            defaultOpenKeys: '0',
        };
    }

    onHandlerClick = (obj: any) => {
        let { key } = obj;
        this.setState({
            defaultSelectedKeys: String(key),
        });
        this.props.threeLevelKeyFun(key, () => { });
        let { apiList }: any = this.props;
        let api: any[] = getApiUtils(apiList, key, 0);
        if (api && api.length > 0) {
            this.props.getUserAll({}, 0);
        }
    }

    onHandlerTitleClick = ({ key }: any) => {
        this.setState({
            defaultOpenKeys: String(key)
        })
        this.props.twoLevelKeyFun(key, () => { })
    }

    htmlSiderMenu = () => {
        let { moduleList, oneLevelKey } = this.props;
        let sideMenuArrays = [];
        if (oneLevelKey) {
            for (let moudle of moduleList) {
                if (moudle['identification'] === oneLevelKey) {
                    let chiMoudle = moudle['children'];
                    for (let chiM of chiMoudle) {
                        sideMenuArrays.push(<SubMenu key={chiM['identification']} onTitleClick={this.onHandlerTitleClick.bind(this)} title={chiM['name']}>
                            {
                                chiM["children"].map((item: any, index: number) => {
                                    return (
                                        <Menu.Item key={item['id']}><NavLink to={item['url']} >{item['name']}</NavLink ></Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>)
                    }
                }
            }
        }
        return sideMenuArrays
    }

    render() {
        return (
            <Sider className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                    openKeys={[this.state.defaultOpenKeys]}
                    onClick={this.onHandlerClick}
                >
                    {this.htmlSiderMenu()}
                </Menu>
            </Sider>
        );
    }
}

const mapStateToProps = (state: any) => ({
    moduleList: state.RCom.moduleList,
    oneLevelKey: state.RCom.oneLevelKey,
    twoLevelKey: state.RCom.twoLevelKey,
    threeLevelKey: state.RCom.threeLevelKey,
    apiList: state.RCom.apiList,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    twoLevelKeyFun,
    threeLevelKeyFun,
    getUserAll,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VSider);

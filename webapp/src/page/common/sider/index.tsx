import React from "react";
import { Layout, Menu } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { twoLevelKeyFun, threeLevelKeyFun } from "@/page/redux/common";

const { SubMenu } = Menu;
const { Sider } = Layout;
export interface SiderProps {
    moduleList?: any;
    oneLevelKey?: any;
    twoLevelKey?: string;
    threeLevelKey?: string;
    twoLevelKeyFun(twoLevelKey: any, callback: () => void): void;
    threeLevelKeyFun(threeLevelKey: any, callback: () => void): void;
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

    onHandlerClick = ({ keyPath, key }: any) => {
        this.setState({
            defaultSelectedKeys: String(key),
        });
        this.props.threeLevelKeyFun(key, () => { })

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
                                        <Menu.Item key={item['identification']}><NavLink to={item['url']} >{item['name']}</NavLink ></Menu.Item>
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
    moduleList:state.RCom.moduleList,
    oneLevelKey:state.RCom.oneLevelKey,
    twoLevelKey:state.RCom.twoLevelKey,
    threeLevelKey:state.RCom.threeLevelKey,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    twoLevelKeyFun,
    threeLevelKeyFun
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VSider);

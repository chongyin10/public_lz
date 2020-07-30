import React from "react";
import { Layout, Menu, message } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { twoLevelKeyFun, threeLevelKeyFun, getListData, initListData, setCurrentPage } from "@/page/redux/common";
import { getApiUtils } from "@/page/utils/common";

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

    onHandlerClick = (obj: any) => {
        let { getListData, initListData, setCurrentPage }: any = this.props;
        setCurrentPage(1);
        let { key } = obj;
        this.setState({
            defaultSelectedKeys: String(key),
        });
        this.props.threeLevelKeyFun(key, () => { });
        let { apiList }: any = this.props;
        let api: any[] = getApiUtils(apiList, key, 0);
        if (api && api.length > 0) {
            getListData(api[0]['path'], {}, 1);
        } else {
            initListData();
            message.error('api接口不存在！');
        }
    }

    onHandlerTitleClick = ({ key }: any) => {
        this.setState({
            defaultOpenKeys: String(key)
        })
        this.props.twoLevelKeyFun(key, () => { });
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
    listData: state.RCom.listData,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    twoLevelKeyFun,
    threeLevelKeyFun,
    getListData,
    initListData,
    setCurrentPage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VSider);

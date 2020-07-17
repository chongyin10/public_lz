import React from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
export interface SiderProps {
    moduleList?: any;
    moudleKey?: any;
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

        })
    }

    onHandlerTitleClick = ({ key }: any) => {
        this.setState({
            defaultOpenKeys: String(key)
        })
    }

    htmlSiderMenu = () => {
        let { moduleList, moudleKey } = this.props;
        let sideMenuArrays = [];
        if (moudleKey) {
            for (let moudle of moduleList) {
                if (moudle['identification'] === moudleKey["oneLevelKey"]) {
                    let chiMoudle = moudle['children'];
                    for (let chiM of chiMoudle) {
                        sideMenuArrays.push(<SubMenu key={chiM['identification']} onTitleClick={this.onHandlerTitleClick.bind(this)} title={chiM['name']}>
                            {
                                chiM["children"].map((item: any, index: number) => {
                                    return (
                                        <Menu.Item key={item['identification']}>{item['name']}</Menu.Item>
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
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                    openKeys={[this.state.defaultOpenKeys]}
                    onClick={this.onHandlerClick.bind(this)}
                >
                    {this.htmlSiderMenu()}
                </Menu>
            </Sider>
        );
    }
}

export default VSider;
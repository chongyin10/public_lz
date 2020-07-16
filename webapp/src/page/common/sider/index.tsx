import React from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
export interface SiderProps {

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

    render() {
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                    openKeys={[this.state.defaultOpenKeys]}
                    onClick={this.onHandlerClick.bind(this)}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} onTitleClick={this.onHandlerTitleClick.bind(this)} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} onTitleClick={this.onHandlerTitleClick.bind(this)} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} onTitleClick={this.onHandlerTitleClick.bind(this)} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default VSider;
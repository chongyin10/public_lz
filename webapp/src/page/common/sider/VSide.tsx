import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { getSubMenus, setSubItemOpenKey, setChiItemOpenKey } from '@/page/redux/app';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { IMenu, Meuns } from '@/page/interface/app';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface IProps {
    subItemList?: IMenu,
    childrenItemList?: IMenu,
    onGetSubMenus(level: number, menuItem: number, callback: () => void): void;
    onSetSubItemOpenKey(subItemOpenKey: string, callback: () => void): void;
    onSetChiItemOpenKey(chiItemOpenKey: string, callback: () => void): void
}

interface IState {
    itemOpenKey: string[];
}

/**
 * Side二级目录类
 */
class VSide extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            itemOpenKey: []
        }
    }

    handleTitleClick = (event: any) => {
        let { key } = event;
        let { subItemList } = this.props;
        let childrenItem: Meuns = {};
        subItemList?.forEach((item) => {
            if (item.id === Number(key)) {
                childrenItem = item;
            }
        })
        this.setState({
            itemOpenKey: [String(key)]
        })
        if (childrenItem) {
            this.props.onGetSubMenus(Number(childrenItem.level) + 1, Number(key), () => { });
            this.props.onSetSubItemOpenKey(String(key), () => { });
        }
    }

    handleClick = (obj: any) => {
        let { key } = obj;
        this.props.onSetChiItemOpenKey(String(key), () => { });
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

        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    openKeys={this.state.itemOpenKey}
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
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetSubMenus: getSubMenus,
    onSetSubItemOpenKey: setSubItemOpenKey,
    onSetChiItemOpenKey: setChiItemOpenKey,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VSide);


import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tag, Space, Divider, Button } from 'antd';
import ComponentsMap from '@/page/common/base';
import { getUserAll } from "@/page/redux/user";
import { dateFormat } from "@/page/utils/date";
import { setSearchForm, onModalCancel } from "@/page/redux/common";
import AddUser from '@/page/components/system/user/addUser';
import '@/page/components/system/user/index.scss';
export interface UserProps {

}

export interface UserState {

}

class User extends React.Component<UserProps, UserState> {
    searchForm = [
        {
            name: 'code',
            label: '用户code',
        },
        {
            name: 'name',
            label: '用户名称',
        }
    ]

    columns = [
        {
            title: '用户code',
            dataIndex: 'code',
            key: 'code',
            width: '20%',
            render: (text: any) => text,
        },
        {
            title: '用户名称',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: (text: any) => text,
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
            width: '20%',
            render: (text: any) => text,
        },
        {
            title: '最后一次登录时间',
            dataIndex: 'lastTime',
            key: 'lastTime',
            width: '20%',
            render: (text: any) => dateFormat('YYYY-mm-dd HH:MM:SS', new Date(text)),
        },
        {
            title: '操作',
            key: 'action',
            render: (text: any, record: any) => (
                <div>
                    <Button size='small' type='ghost' >修改</Button>
                    <Divider type='vertical' />
                    <Button size='small' type='ghost' >删除</Button>
                </div>
            ),
        },
    ]

    componentDidUpdate() {
        let { modalVisible, onModalCancel }: any = this.props;
        console.log('@modalVisible:', modalVisible)
    }
    render() {
        let { userAll, getUserAll, setSearchForm, onModalCancel, modalVisible }: any = this.props;
        return (
            <div className='user-index'>
                <ComponentsMap
                    searchForm={this.searchForm}
                    onFinish={getUserAll}
                    setSearchForm={setSearchForm}
                    columns={this.columns}
                    dataSource={userAll}
                    onModalCancel={onModalCancel}
                />
                {modalVisible ? <AddUser modleTitle='添加用户' /> : ""}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    userAll: state.RUser.userAll,
    modalVisible: state.RCom.modalVisible
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getUserAll,
    setSearchForm,
    onModalCancel
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);
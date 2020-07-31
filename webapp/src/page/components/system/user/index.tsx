import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ComponentsMap from '@/page/common/base';
import { dateFormat } from "@/page/utils/date";
import UserMap from '@/page/components/system/user/userMap';
import '@/page/components/system/user/index.scss';
import { userSearchForm } from '@/page/searchForm';
export interface UserProps {

}

export interface UserState {

}

class User extends React.Component<UserProps, UserState> {

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
        }
    ]

    btnActions = [
        {
            type: 'update',
            isVisable: true,
            title: '修改'
        },
        {
            type: 'delete',
            isVisable: true,
            title: '删除'
        }
    ]

    render() {
        let { listData, modalVisible, data: { list } }: any = this.props;
        return (
            <div className='user-index' >
                <ComponentsMap
                    searchForm={userSearchForm}
                    columns={this.columns}
                    dataSource={listData}
                    actionOption={this.btnActions}
                />
                {modalVisible ? <UserMap modleTitle={(list ? '修改' : "添加") + "用户"} /> : ""}
            </div >
        );
    }
}

const mapStateToProps = (state: any) => ({
    listData: state.RCom.listData,
    modalVisible: state.RCom.modalVisible,
    data: state.RCom.data,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);
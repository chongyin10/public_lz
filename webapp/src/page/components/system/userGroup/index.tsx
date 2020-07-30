import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ComponentsMap from '@/page/common/base';
import AddUserGroup from '@/page/components/system/userGroup/addUserGroup';
import '@/page/components/system/userGroup/index.scss';
import { userGroupSearchForm } from '@/page/searchForm';
export interface IProps {

}

export interface IState {

}

class UserGroup extends React.Component<IProps, IState> {

    columns = [
        {
            title: 'code',
            dataIndex: 'code',
            key: 'code',
            width: '40%',
            render: (text: any) => text,
        },
        {
            title: '用户组名称',
            dataIndex: 'name',
            key: 'name',
            width: '40%',
            render: (text: any) => text,
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
        let { listData, modalVisible }: any = this.props;

        return (
            <div className='user-index' >
                <ComponentsMap
                    searchForm={userGroupSearchForm}
                    columns={this.columns}
                    dataSource={listData}
                    actionOption={this.btnActions}
                />
                {/* {modalVisible ? <AddUserGroup modleTitle='添加用户组' /> : ""} */}
            </div >
        );
    }
}

const mapStateToProps = (state: any) => ({
    listData: state.RCom.listData,
    modalVisible: state.RCom.modalVisible,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserGroup);
import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ComponentsMap from '@/page/common/base';
import AddApi from '@/page/components/system/api/addApi';
import '@/page/components/system/api/index.scss';
import { apiSearchForm } from '@/page/searchForm';
import { Tag } from "antd";
export interface IProps {

}

export interface IState {

}

class Api extends React.Component<IProps, IState> {

    columns = [
        {
            title: 'code',
            dataIndex: 'code',
            key: 'code',
            width: '25%',
            render: (text: any) => text,
        },
        {
            title: 'api名称',
            dataIndex: 'name',
            key: 'name',
            width: '15%',
            render: (text: any) => text,
        },
        {
            title: '路由path',
            dataIndex: 'path',
            key: 'path',
            width: '25%',
            render: (text: any) => text,
        },
        {
            title: '是否系统接口',
            dataIndex: 'system',
            key: 'system',
            width: '10%',
            render: (text: any) => {
                return text == 1 ? '是' : '否'
            },
        },
        {
            title: '类型接口',
            dataIndex: 'type',
            key: 'type',
            width: '10%',
            render: (text: any) => {
                switch (text) {
                    case 0:
                        return <Tag color='geekblue' key={text}>查询</Tag>
                    case 1:
                        return <Tag color='green' key={text}>添加</Tag>
                    case 3:
                        return <Tag color='red' key={text}>删除</Tag>
                    default:
                        return <Tag color='lime' key={text}>更新</Tag>
                }
            },
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
                    searchForm={apiSearchForm}
                    columns={this.columns}
                    dataSource={listData}
                    actionOption={this.btnActions}
                />
                {modalVisible ? <AddApi modleTitle='添加用户组' /> : ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(Api);
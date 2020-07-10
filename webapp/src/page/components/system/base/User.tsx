import * as React from 'react';
import { Link, withRouter, RouteComponentProps, Route, Switch } from "react-router-dom";
import { Modal, Table, Space, Tag } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getApiByPath } from '@/page/redux/system';
import { UserInfo } from '@/page/interface/user';

export interface IProps {
    apiList?: any;
    chiItemOpenKey?: string;
    onGetApiByPath(path: string, user?: UserInfo, callback?: () => void): void
}
interface IState {

}

class User extends React.Component<IProps, IState> {

    componentDidUpdate() {
        let { apiList, chiItemOpenKey } = this.props;
        if (apiList?.length > 0) {
            for (let api of apiList) {
                if (api.itemid == chiItemOpenKey && api.type === 0) {
                    debugger
                    this.props.onGetApiByPath(api.path);
                }
            }
            //this.props.onGetApiByPath()
        }
    }

    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text: any) => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: (tags: any) => (
                    <>
                        {tags.map((tag: any) => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text: any, record: any) => (
                    <Space size="middle">
                        <a>Invite {record.name}</a>
                        <a>Delete</a>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        return (
            <>
                <Table columns={columns} dataSource={data} />
            </>
        );
    }
}
const mapStateToProps = (state: any) => ({
    apiList: state.RSys.apiList,
    chiItemOpenKey: state.RApp.chiItemOpenKey,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetApiByPath: getApiByPath
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);

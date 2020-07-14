import * as React from 'react';
import { Modal, Table, Space, Tag } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getApiByPath } from '@/page/redux/system';

export interface IProps {
    apiList?: any;
    chiItemOpenKey?: string;
    apiData?: any;
    onGetApiByPath(path: string, user?: any, callback?: () => void): void
}
interface IState {

}

class User extends React.Component<IProps, IState> {

    componentWillUpdate() {
        let { apiList, chiItemOpenKey, apiData } = this.props;
        if (typeof apiList === 'string') {
            let _apiList = JSON.parse(apiList);
            if (_apiList?.length > 0) {
                for (let api of _apiList) {
                    if (api.itemid == chiItemOpenKey && api.type === 0) {
                        this.props.onGetApiByPath(api.path, {}, () => { });
                    }
                }
            }
        }
        console.log('@apiList', apiList)
    }

    render() {
        // console.log(this.props.apiData)
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
    apiData: state.RSys.apiData,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetApiByPath: getApiByPath
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);

import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Collapse, Table } from 'antd';
import '@/page/components/system/api/index.scss';
import { uuid, getApiUtils } from "@/page/utils/common";
import SearchForm from '@/page/common/base/searchForm';
import { getListData, setSearchForm, setCurrentPage } from "@/page/redux/common";
import { tableSearchForm } from "@/page/searchForm";

const { Panel } = Collapse;

export interface IProps {

}

export interface IState {

}

class Api extends React.Component<IProps, IState> {

    columns = [
        {
            title: '字段名称',
            dataIndex: 'COLUMN_NAME',
            key: 'COLUMN_NAME',
            width: '30%',
        },
        {
            title: '字段类型',
            dataIndex: 'COLUMN_TYPE',
            width: '30%',
            key: 'COLUMN_TYPE',
        },
        {
            title: '字段说明',
            dataIndex: 'COLUMN_COMMENT',
            key: 'COLUMN_COMMENT',
        },
    ];

    handleFinish = (data: any) => {
        let { threeLevelKey, apiList, getListData }: any = this.props;
        let api: any[] = getApiUtils(apiList, threeLevelKey, 0);
        if (api && api.length > 0) {
            getListData(api[0]['path'], data, 1);
        }
    }

    render() {
        let { listData }: any = this.props;
        return (
            <div>
                <SearchForm
                    searchForm={tableSearchForm}
                    onFinish={this.handleFinish.bind(this)}
                    setSearchForm={setSearchForm}
                    setCurrentPage={setCurrentPage}
                />
                <Collapse style={{ margin: '5px 0px' }}>
                    {
                        listData && listData['list'] && listData['list'].map((item: any, index: number) => {
                            return <Panel header={item['TABLE_NAME'] + ' 表'} key={index}>
                                {
                                    <Table bordered pagination={false} rowKey={(recode: any) => uuid(32)} dataSource={item['type']} columns={this.columns} />
                                }
                            </Panel>
                        })
                    }
                </Collapse>
            </div>

        );
    }
}

const mapStateToProps = (state: any) => ({
    listData: state.RCom.listData,
    threeLevelKey: state.RCom.threeLevelKey,
    apiList: state.RCom.apiList,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getListData,
    setSearchForm,
    setCurrentPage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Api);
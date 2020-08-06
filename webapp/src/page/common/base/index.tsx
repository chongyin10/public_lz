import React from "react";
import { Button, Divider } from 'antd';
import SearchForm from '@/page/common/base/searchForm';
import Table from '@/page/common/base/table'
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchForm, onModalCancel, setCurrentPage, getListData, deleteData, getDataByIdForm, initData, setIds } from "@/page/redux/common";
import { getApiUtils } from "@/page/utils/common";
import { FileAddTwoTone } from '@ant-design/icons';
import '@/page/common/base/index.scss';

export interface ComponentsMapProps {
    dataSource: any;
    columns: any;
    searchForm: any;
    actionOption?: any;
    btnAction?: string;
}

export interface ComponentsMapState {

}

class ComponentsMap extends React.Component<ComponentsMapProps, ComponentsMapState> {

    handlerClick = (event: any) => {
        let { onModalCancel, initData }: any = this.props;
        initData();
        onModalCancel(true);
    }

    // 此处可以封装
    handlePage = (currentPage: Number) => {
        let { threeLevelKey, apiList, getListData, searchFormData }: any = this.props;
        let api: any[] = getApiUtils(apiList, threeLevelKey, 0);
        if (api && api.length > 0) {
            getListData(api[0]['path'], searchFormData, currentPage);
        }
    }

    handleFinish = (data: any) => {
        let { threeLevelKey, apiList, getListData }: any = this.props;
        let api: any[] = getApiUtils(apiList, threeLevelKey, 0);
        if (api && api.length > 0) {
            getListData(api[0]['path'], data, 1);
        }
    }

    render() {
        let { pageCount, currentPage, pageSize,
            setSearchForm, setCurrentPage, getDataByIdForm, setIds,
            threeLevelKey, apiList, deleteData }: any = this.props;
        return (
            <div className='componentsMap'>
                <SearchForm
                    searchForm={this.props.searchForm}
                    onFinish={this.handleFinish.bind(this)}
                    setSearchForm={setSearchForm}
                    setCurrentPage={setCurrentPage}
                />
                <Button onClick={this.handlerClick} icon={<FileAddTwoTone />} style={{ margin: '5px 0px', borderRadius: "10" }}>
                    {this.props.btnAction || '添加'}
                </Button>
                <Table
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                    pageSize={pageSize}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    handlePage={this.handlePage.bind(this)}
                    setCurrentPage={setCurrentPage}
                    threeLevelKey={threeLevelKey}
                    apiList={apiList}
                    deleteData={deleteData}
                    actionOption={this.props.actionOption}
                    getDataByIdForm={getDataByIdForm}
                    setIds={setIds}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    pageCount: state.RCom.pageCount,
    currentPage: state.RCom.currentPage,
    pageSize: state.RCom.pageSize,
    apiList: state.RCom.apiList,
    threeLevelKey: state.RCom.threeLevelKey,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setSearchForm,
    onModalCancel,
    setCurrentPage,
    getListData,
    deleteData,
    getDataByIdForm,
    initData,
    setIds
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsMap);
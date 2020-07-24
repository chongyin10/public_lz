import React from "react";
import { Button, Divider } from 'antd';
import SearchForm from '@/page/common/base/searchForm';
import Table from '@/page/common/base/table'

import '@/page/common/base/index.scss';
import { PlusOutlined } from "@ant-design/icons";

export interface ComponentsMapProps {
    dataSource: any;
    columns: any;
    searchForm: any;
    onModalCancel: (modalVisible: Boolean) => void;
    setSearchForm: (searchForm: any) => void;
    onFinish: (data: any) => void;
}

export interface ComponentsMapState {

}

class ComponentsMap extends React.Component<ComponentsMapProps, ComponentsMapState> {

    handlerClick = (event: any) => {
        this.props.onModalCancel(true);
    }

    render() {
        return (
            <div className='componentsMap'>
                <SearchForm
                    searchForm={this.props.searchForm}
                    onFinish={this.props.onFinish}
                    setSearchForm={this.props.setSearchForm}
                />
                <Button onClick={this.handlerClick} style={{ margin: '5px', borderRadius: "10" }}>添加</Button>
                <Table
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                />
            </div>
        );
    }
}

export default ComponentsMap;
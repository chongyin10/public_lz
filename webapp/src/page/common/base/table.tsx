import React, { Component } from "react";
import { Table, Tag, Space } from 'antd';

import '@/page/common/base/table.scss';

export interface TableMapProps {
    columns: any[];
    dataSource: any;
}

export interface TableMapState {
    defaultCurrent?: Number;
}

class TableMap extends React.Component<TableMapProps, TableMapState> {

    constructor(props: TableMapProps) {
        super(props);
        this.state = {
            defaultCurrent: 1
        }
    }

    handlePage = (currentPage: Number) => {
        this.setState({
            defaultCurrent: currentPage
        })
    }

    render() {
        return (
            <Table
                rowKey={(recode: any) => recode["id"]}
                columns={this.props.columns}
                dataSource={this.props.dataSource["data"]}
                bordered
                rowClassName={(record: any, index: any): string => {
                    let className = 'light-row-table-one';
                    if (index % 2 === 1) className = 'light-row-table-tow';
                    return className.toString()
                }}
                className='row-table-line'
                pagination={{
                    onChange: this.handlePage,
                    responsive: true,
                    defaultPageSize: this.props.dataSource["data"]?.length,
                    total: this.props.dataSource['pageCount'],
                    showTotal: (total, range) => {
                        return `总共 ${total} 条`
                    },
                }}
            />
        );
    }
}

export default TableMap;
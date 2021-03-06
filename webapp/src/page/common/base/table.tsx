import React, { Component } from "react";
import { Table, Tag, Space, Button, Divider, Popconfirm, message } from 'antd';

import '@/page/common/base/table.scss';
import { getApiUtils } from "@/page/utils/common";
import { delBtnAction, updateBtnAction } from '@/page/common/base/btnActions';

export interface TableMapProps {
    columns: any[];
    dataSource: any;
    pageSize: Number;
    currentPage: Number;
    pageCount: Number;
    threeLevelKey: any;
    apiList: any;
    actionOption?: any;
    handlePage(currentPage: Number): void;
    setCurrentPage(currentPage: Number): void;
    deleteData(api: string, id: string | Number): void;
    getDataByIdForm(api: string, id: number | string): void;
    setIds(id: any): void;
}

export interface TableMapState {
}

class TableMap extends React.Component<TableMapProps, TableMapState> {

    constructor(props: TableMapProps) {
        super(props);

    }

    handlePage = (currentPage: Number) => {
        this.props.setCurrentPage(currentPage);
        this.props.handlePage(Number(currentPage));
    }

    handlerConfirm = (text: any, event: any) => {
        let { threeLevelKey, apiList }: any = this.props;
        let api: any[] = getApiUtils(apiList, threeLevelKey, 3);
        if (api && api.length > 0) {
            this.props.deleteData(api[0]['path'], text['id']);
        }
    }

    handleUpdataForm = (data: any) => {
        let { threeLevelKey, apiList, setIds}: any = this.props;
        let api: any[] = getApiUtils(apiList, threeLevelKey, 2);
        if (api && api.length > 0) {
            setIds(data["id"]);
            this.props.getDataByIdForm(api[0]['path'], Number(data["id"]));
        } else {
            message.info('接口未注册')
        }
    }

    actions = {
        title: '操作',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="small">
                {
                    this.props.actionOption?.map((item: any, index: number) => {
                        return <div key={index}>
                            {updateBtnAction(item['isVisable'], item['type'], item['title'], this.handleUpdataForm.bind(this, text))}
                            {delBtnAction(item['isVisable'], item['type'], item['title'], this.handlerConfirm.bind(this, text, record))}
                        </div>
                    })
                }
            </Space>
        ),
    }

    render() {
        let { pageSize, dataSource, actionOption, columns, currentPage }: any = this.props;
        return (
            <Table
                rowKey={(recode: any) => recode["id"]}
                columns={actionOption ? columns.concat(this.actions) : columns}
                dataSource={dataSource["list"]}
                bordered
                rowClassName={(record: any, index: any): string => {
                    let className = 'light-row-table-one';
                    if (index % 2 === 1) className = 'light-row-table-tow';
                    return className.toString()
                }}
                className='row-table-line'
                pagination={{
                    onChange: this.handlePage.bind(this), // 一般都在构造函数进行bind绑定，这样便于初始化，有时候过于麻烦就直接这样写了
                    responsive: true,
                    showSizeChanger: false,
                    showQuickJumper: true,
                    current: parseInt(currentPage),
                    pageSize: parseInt(pageSize),
                    total: parseInt(dataSource['pageCount']),
                    showTotal: (total, range) => {
                        return `总共 ${total} 条`
                    },
                }}
            />
        );
    }
}

export default TableMap;
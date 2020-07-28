import React from "react";
import { Form, Row, Col, Input, Button } from 'antd';
import { FormInstance } from "antd/lib/form";

import SearchBtn from '@/page/common/base/searchBtn';

export interface formMapProps {
    searchForm: any[];
    onFinish: (data: any) => void;
    setSearchForm: (searchForm: any) => void;
    setCurrentPage: (currentPage: Number) => void;
}

export interface formMapState {

}

class formMap extends React.Component<formMapProps, formMapState> {

    formRef = React.createRef<FormInstance>();

    onFinish = (data: any) => {
        this.props.setSearchForm(data);
        this.props.onFinish(data);
        this.props.setCurrentPage(1);
    }

    colHtml = (data: any[]) => {
        let _colHtml: any = [];
        if (data && data.length > 0) {
            for (let item of data) {
                _colHtml.push(<Col key={item["name"]} span={6}><Form.Item {...item}>
                    <Input placeholder={"请输入" + item["label"]} />
                </Form.Item></Col>);
            }
        }
        return _colHtml;
    }

    render() {
        return (
            <Form
                ref={this.formRef}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={this.onFinish}
            >
                <Row gutter={24}>
                    {this.colHtml(this.props.searchForm)}
                </Row>
                <SearchBtn formRef={this.formRef} />
            </Form>
        );
    }
}

export default formMap;
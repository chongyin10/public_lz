import React from "react";
import { Form, Row, Col, Input, Button } from 'antd';

import '@/page/common/base/searchBtn.scss';

export interface SearchProps {
    formRef: any
}

export interface SearchState {

}

class Search extends React.Component<SearchProps, SearchState> {


    onReset = () => {
        this.props.formRef.current.resetFields();
    };

    render() {
        return (
            <Row gutter={24} className='ant-advanced-search-form-btn'>
                <Col span={24}>
                    <Form.Item>
                        <Button type="ghost" htmlType="submit" className="submit-button" style={{borderColor:'none'}}>
                            查询
                        </Button>
                        <Button type="ghost" htmlType="button" onClick={this.onReset} className="reset-button">
                            重置
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        );
    }
}

export default Search;
import React from "react";
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { uuid } from "@/page/utils/common";

const { Option } = Select;

export interface IProps {
    formRef: any;
}

export interface IState {

}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
};

class FormApi extends React.Component<IProps, IState> {

    componentDidMount() {
        console.log('获取module')
    }

    render() {
        return (
            <Form
                initialValues={{ remember: true }}
                ref={this.props.formRef}
                {...layout}
            >
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="code"
                            label='code：'
                            {...tailLayout}
                            initialValue={uuid(32)}
                        >
                            <Input
                                autoComplete='off'
                                disabled
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="name"
                            label='名称：'
                            {...tailLayout}
                            rules={[{ required: true, message: '请输入名称' }]}
                        >
                            <Input
                                autoComplete='on'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="path"
                            label='路由：'
                            {...tailLayout}
                            rules={[{ required: true, message: '请输入路由' }]}
                        >
                            <Input
                                autoComplete='on'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="type"
                            label='类型：'
                            {...tailLayout}
                            rules={[{ required: true, message: '请输入类型' }]}
                        >
                            <Select
                                listItemHeight={10}
                                listHeight={250}
                                defaultValue=""
                                className='api-select-option'
                            >
                                <Option value="0">查询</Option>
                                <Option value="1">添加</Option>
                                <Option value="3">删除</Option>
                                <Option value="4">更新</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default FormApi;
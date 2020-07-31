import React from "react";
import { Form, Input, Button, Row, Col, Select, Radio } from 'antd';
import { uuid } from "@/page/utils/common";

const { Option } = Select;

export interface IProps {
    formRef: any;
    data?: any;
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

    handleChange = (event: any) => {
        // console.log(event.target.value)
    }

    render() {

        let { data: { list } }: any = this.props;

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
                            initialValue={list ? list["code"] : uuid(32)}
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
                            initialValue={list ? list['name'] : ""}
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
                            initialValue={list ? list['path'] : ""}
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
                            name="system"
                            label='系统Api：'
                            initialValue={list ? list['system'] : ""}
                            {...tailLayout}
                            rules={[{ required: true, message: '请选择是否系统Api' }]}
                        >
                            <Radio.Group onChange={this.handleChange.bind(this)}>
                                <Radio value={0}>否</Radio>
                                <Radio value={1}>是</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="type"
                            label='类型：'
                            {...tailLayout}
                            initialValue={list ? list['type'] : ""}
                            rules={[{ required: true, message: '请选择类型' }]}
                        >
                            <Select
                                listItemHeight={10}
                                listHeight={250}
                                className='api-select-option'
                            >
                                <Option value={0}>分页查询</Option>
                                <Option value={2}>ID查询</Option>
                                <Option value={1}>添加</Option>
                                <Option value={3}>删除</Option>
                                <Option value={4}>更新</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default FormApi;
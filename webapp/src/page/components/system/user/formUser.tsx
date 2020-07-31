import React from "react";
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { uuid } from "@/page/utils/common";

export interface FormUserProps {
    formRef: any;
    data?: any;
}

export interface FormUserState {

}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
};

class FormUser extends React.Component<FormUserProps, FormUserState> {

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
                            label='用户code：'
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
                            label='用户名称：'
                            initialValue={list ? list['name'] : ""}
                            {...tailLayout}
                            rules={[{ required: true, message: '请输入账号' }]}
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
                            name="password"
                            label='用户密码：'
                            initialValue={list ? list['password'] : ""}
                            {...tailLayout}
                            rules={[{ required: true, message: '请输入密码！' }]}
                        >
                            <Input
                                autoComplete='off'
                                type="password"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="status"
                            label='登录状态'
                            {...tailLayout}
                            initialValue={list ? list['status'] : "1"}
                            extra='0: 未登录；1：已登录'
                        >
                            <Input
                                autoComplete='off'
                                disabled
                            />
                        </Form.Item>
                        <label></label>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default FormUser;
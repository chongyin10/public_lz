import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';

import loginJpg from '@images/login_bg.jpg';
import './login.scss';
import { getUsers } from "@/page/redux/system";
import { UserInfo } from "@/page/interface/user";

export interface LoginProps extends RouteComponentProps {
    form?: any;
    userInfo?: UserInfo,
    getUsers(param: UserInfo, callback: () => void): void;
}

export interface LoginState {

}

const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 24 },
};

class Login extends React.Component<LoginProps, LoginState> {
    formRef = React.createRef<FormInstance>();

    onFinish = (obj: any) => {
        this.props.getUsers(obj, () => { });
    };

    render() {

        return (
            <div className='login'>
                <img className='login-bg' src={loginJpg} />
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    ref={this.formRef}
                    {...layout}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入账号' }]}
                    >
                        <Input autoComplete='on' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码！' }]}
                    >
                        <Input
                            autoComplete='off'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"

                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-dl-button">
                            登录
                        </Button>
                        <Button type="primary" htmlType="submit" className="login-zc-button">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    userInfo: state.RSys.userInfo
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getUsers: getUsers
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

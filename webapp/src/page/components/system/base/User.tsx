import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { Form, Input, Select, Tooltip, Button } from 'antd';
import { getUsers } from '../../../redux/system';
import { UserInfo, UserInfoResponse } from '../../../interface/user';

const { Option } = Select;

export interface IProps {
    form: any;
    history: any;
    // userList: UserInfoResponse;
    // onGetUsers(param: UserInfo, callback: () => void): void;
}

interface IState {

}

class User extends React.Component<IProps, IState> {

    render() {
        return (
            <div>
                User 用户管理
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    // onGetUsers: getUsers,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);

import React from "react";
import modalConnect from '@/page/common/modal';
import FormUser from '@/page/components/system/user/formUser';
import { FormInstance } from "antd/lib/form";

export interface AddUserProps {
    data?: any;
}

export interface AddUserState {

}

const formRef = React.createRef<FormInstance>();
class AddUser extends React.Component<AddUserProps, AddUserState> {

    render() {
        return (
            <div className='adduser-index'>
                <FormUser formRef={formRef} data={this.props.data}/>
            </div>
        );
    }
}

export default modalConnect(formRef)(AddUser);
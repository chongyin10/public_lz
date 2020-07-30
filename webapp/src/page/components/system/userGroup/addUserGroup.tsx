import React from "react";
import modalConnect from '@/page/common/modal';
import FormGroupUser from '@/page/components/system/userGroup/formGroupUser';
import { FormInstance } from "antd/lib/form";

export interface AddUserGroupProps {

}

export interface AddUserGroupState {

}

const formRef = React.createRef<FormInstance>();
class AddUserGroup extends React.Component<AddUserGroupProps, AddUserGroupState> {

    render() {
        return (
            <div className='AddUserGroup-index'>
                <FormGroupUser formRef={formRef} />
            </div>
        );
    }
}

export default modalConnect(formRef)(AddUserGroup);
import React from "react";
import modalConnect from '@/page/common/modal';
import FormApi from '@/page/components/system/api/formApi';
import { FormInstance } from "antd/lib/form";

export interface AddApiProps {
    data?: any;
}

export interface AddApiState {

}

const formRef = React.createRef<FormInstance>();
class AddApi extends React.Component<AddApiProps, AddApiState> {

    render() {
        return (
            <div className='AddApi-index'>
                <FormApi formRef={formRef} data={this.props.data}/>
            </div>
        );
    }
}

export default modalConnect(formRef)(AddApi);
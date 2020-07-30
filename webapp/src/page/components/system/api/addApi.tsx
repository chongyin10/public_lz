import React from "react";
import modalConnect from '@/page/common/modal';
import FormApi from '@/page/components/system/api/formApi';
import { FormInstance } from "antd/lib/form";

export interface AddApiProps {

}

export interface AddApiState {

}

const formRef = React.createRef<FormInstance>();
class AddApi extends React.Component<AddApiProps, AddApiState> {

    render() {
        return (
            <div className='AddApi-index'>
                <FormApi formRef={formRef} />
            </div>
        );
    }
}

export default modalConnect(formRef)(AddApi);
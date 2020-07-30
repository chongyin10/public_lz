import React from "react";
import { Modal, Button, message } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onModalCancel, addDataForm } from "@/page/redux/common";

import '@/page/common/modal/index.scss';
import { getApiUtils } from "@/page/utils/common";

export default (formRef: any) => (WrappedComponent: any) => {
    interface ModalMapProps {
        modleTitle: string;
    }

    interface ModalMapState {

    }

    class ModalMap extends React.Component<ModalMapProps, ModalMapState> {

        handlerModalOk = () => {
            formRef.current.validateFields().then((value: any) => {
                let { threeLevelKey, apiList, addDataForm }: any = this.props;
                let api: any[] = getApiUtils(apiList, threeLevelKey, 1);
                if (api && api.length > 0) {
                    addDataForm(api[0]['path'], value)
                } else {
                    message.error('api接口不存在，请注册')
                }
            })
        }

        handlerModalCancel = () => {
            let { onModalCancel }: any = this.props;
            onModalCancel(false);
        }

        render() {
            let { modalVisible }: any = this.props;
            return (
                <Modal
                    title={this.props.modleTitle}
                    visible={modalVisible}
                    onOk={this.handlerModalOk}
                    onCancel={this.handlerModalCancel}
                    cancelText="取消"
                    okText="确定"
                >
                    <WrappedComponent {...this.props} />
                </Modal>
            );
        }
    }

    const mapStateToProps = (state: any) => ({
        modalVisible: state.RCom.modalVisible,
        threeLevelKey: state.RCom.threeLevelKey,
        apiList: state.RCom.apiList,
    });
    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        onModalCancel,
        addDataForm
    }, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(ModalMap);
}
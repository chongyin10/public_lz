import React from "react";
import { Modal, Button, message } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onModalCancel, addDataForm, updateDataForm } from "@/page/redux/common";

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
                let { threeLevelKey, apiList, addDataForm, data: { list }, updateDataForm, ids, currentPage }: any = this.props;
                if (list) { // list 有值时 则为修改操作
                    let api: any[] = getApiUtils(apiList, threeLevelKey, 4);
                    if (api && api.length > 0) {
                        updateDataForm(api[0]['path'], value, ids, currentPage)
                    } else {
                        message.error('api接口不存在，请注册')
                    }
                } else {  // list 为undefined 则为新增操作
                    let api: any[] = getApiUtils(apiList, threeLevelKey, 1);
                    if (api && api.length > 0) {
                        addDataForm(api[0]['path'], value)
                    } else {
                        message.error('api接口不存在，请注册')
                    }
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
                    <WrappedComponent {...this.props} /> { /* 不建议用...props写法，影响性能，diff算法 */}
                </Modal>
            );
        }
    }

    const mapStateToProps = (state: any) => ({
        modalVisible: state.RCom.modalVisible,
        threeLevelKey: state.RCom.threeLevelKey,
        apiList: state.RCom.apiList,
        data: state.RCom.data,
        ids: state.RCom.ids,
        currentPage: state.RCom.currentPage
    });
    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        onModalCancel,
        addDataForm,
        updateDataForm
    }, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(ModalMap);
}
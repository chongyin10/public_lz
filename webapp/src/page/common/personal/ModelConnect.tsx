import * as React from 'react';
import { Link, withRouter, RouteComponentProps, Route, Switch } from "react-router-dom";
import { Modal, Button } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface IProps extends RouteComponentProps {
    modalVisible?: boolean;
    title?: string;
    onModalStatus(modalVisible: boolean, callback: () => void): void;
}

interface IState {

}

export default (modalOtherOption?: any) => (WrappedComponent: any) => {
    class ModelConnect extends React.Component<IProps, IState>  {

        handleOk = () => {
            this.props.onModalStatus(false, () => { });
        }

        handleCancel = () => {
            this.props.onModalStatus(false, () => { });
        }
        render() {
            console.log(this.props)
            return (
                <Modal
                    {...modalOtherOption}
                    visible={this.props.modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <WrappedComponent />
                </Modal>
            )
        }
    }
    return ModelConnect
}

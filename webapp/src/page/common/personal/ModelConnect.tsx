import * as React from 'react';
import { Link, withRouter, RouteComponentProps, Route, Switch } from "react-router-dom";
import { Modal, Button } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Tdispatch from '@/page/redux/app';

export interface IProps extends RouteComponentProps {
    modalVisible?: boolean;
    modalOtherOption?: any;
    personalItemKey: string;
    title?: string;
    onModalStatus(modalVisible: boolean, callback: () => void): void;
}

interface IState {

}

export default (WrappedComponent: any) => {
    class ModelConnect extends React.Component<IProps, IState>  {

        handleOk = () => {
            this.props.onModalStatus(false, () => { });
        }

        handleCancel = () => {
            this.props.onModalStatus(false, () => { });
        }

        render() {
            return (
                <Modal
                    {...this.props.modalOtherOption}
                    visible={this.props.modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <WrappedComponent personalItemKey={this.props.personalItemKey} />
                </Modal>
            )
        }
    }

    const mapStateToProps = (state: any) => ({
        ...state.RApp
    });
    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        ...Tdispatch
    }, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(ModelConnect);
}

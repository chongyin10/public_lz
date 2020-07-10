import * as React from 'react';
import { Link, withRouter, RouteComponentProps, Route, Switch } from "react-router-dom";
import { Modal, Table } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Tdispatch from '@/page/redux/system';


export interface IPorps {

}

export interface IState {

}

export default (columns: any, dataSource: any) => (v: any) => {
    class TableConnect extends React.Component<IPorps, IState> {
        render() {
            return (
                <Table columns={columns} dataSource={dataSource} />
            )
        }
    }

    const mapStateToProps = (state: any) => ({
        ...state
    });
    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        ...Tdispatch
    }, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(TableConnect);
}
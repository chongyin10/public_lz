import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

export interface IProps {
    form: any;
    history: any;
}

interface IState {
}

class LogsCheck extends React.Component<IProps, IState> {

    render() {
        return (
            <div>
                LogsCheck 日志查看
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    dispatch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LogsCheck);

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

export interface IProps {
    form: any;
    history: any;
}

interface IState {
}

class Power extends React.Component<IProps, IState> {

    render() {
        return (
            <div>
                Power 权限管理
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Power);

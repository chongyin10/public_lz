import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

export interface IProps {
    form: any;
    history: any;
}

interface IState {

}

class UserGroup extends React.Component<IProps, IState> {

    render() {
        return (
            <div>
                UserGroup 用户组管理
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    dispatch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserGroup);

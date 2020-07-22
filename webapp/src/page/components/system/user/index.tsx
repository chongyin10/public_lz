import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
export interface UserProps {

}

export interface UserState {

}

class User extends React.Component<UserProps, UserState> {

    render() {
        console.log(this.props)
        return (
            <div>
                User
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);
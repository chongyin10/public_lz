import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadable from '@loadable/component';  // 按需加载Router
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface IProps extends RouteComponentProps {

}

interface IState {
}
class App extends React.Component<IProps, IState>{

    componentDidMount() {
        let { sessionUserInfo } = window.sessionStorage;
        if (sessionUserInfo === "") {
            this.props.history.replace('/login')
        }
    }

    render() {
        return (
            <div>
                测试App
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
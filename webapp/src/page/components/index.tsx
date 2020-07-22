import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LayoutApp from '@/page/common';
import { getModules } from "../redux/common";

interface AppProps {
    onGetModules(): void;
}

export interface AppState {

}

class App extends React.Component<AppProps, AppState> {

    async UNSAFE_componentWillMount() {
        await this.props.onGetModules()
    }

    render() {
        return (
            <div className='app'>
                <LayoutApp />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetModules: getModules
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LayoutApp from '@/page/common';
import { getModules, getApiAll } from "../redux/common";

interface AppProps {
    onGetModules(): void;
    onGetApi(): void;
}

export interface AppState {

}

class App extends React.Component<AppProps, AppState> {

    async UNSAFE_componentWillMount() {
        await this.props.onGetModules(); // 获取module
        await this.props.onGetApi(); // 获取接口api
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
    onGetModules: getModules,
    onGetApi: getApiAll
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

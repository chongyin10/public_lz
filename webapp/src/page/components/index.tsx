import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LayoutApp from '@/page/common';
import { getModules, getApiAll, spinLoading } from "../redux/common";

interface AppProps {
    onGetModules(): void;
    onGetApi(): void;
    spinLoading(loadding: boolean): void;
}

export interface AppState {

}

class App extends React.Component<AppProps, AppState> {

    UNSAFE_componentWillMount() {
        this.props.onGetModules(); // 获取module
        this.props.onGetApi(); // 获取接口api
    }

    render() {
        return (
            <div className='app'>
                <LayoutApp />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetModules: getModules,
    onGetApi: getApiAll,
    spinLoading,
}, dispatch)

export default connect((state: any) => ({}), mapDispatchToProps)(App);

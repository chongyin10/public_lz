import React from "react";
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from '@/page/router';
import '@/page/index.scss';

export interface MainProps {
}
export interface MainState {

}

class Main extends React.Component<MainProps, MainState> {

    render() {
        return (
            <div className='_app' style={{ width: "100%", height: window.innerHeight }}>
                <Router />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);


import React from "react";

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

export default Main;

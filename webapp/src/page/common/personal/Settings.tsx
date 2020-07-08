import React from "react";
import baseConnet from '@/page/common/personal/BaseConnect';
import { initState } from '@/page/redux/app/state';

export interface IPorps {
}
export interface IState {
}

class Settings extends React.Component<IPorps, IState> {

    render() {
        return (
            <div>
                <div>
                    我的settings
                </div>
            </div>
        );
    }
}

export default baseConnet(initState.modalOtherOption = { title: 'settings' })(Settings)


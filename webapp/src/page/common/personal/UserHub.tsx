import React from "react";
import baseConnet from '@/page/common/personal/BaseConnect';
import { initState } from '@/page/redux/app/state';

export interface IPorps {
}

export interface IState {
}

class UserHub extends React.Component<IPorps, IState> {

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default baseConnet(initState.modalOtherOption = { title: '个人中心' })(UserHub)


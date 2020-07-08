import React from "react";

export interface IPorps {
}

export interface IState {
}

class UserHub extends React.Component<IPorps, IState> {
    render() {
        return (
            <div>
                我的个人中心
            </div>
        );
    }
}

export default UserHub

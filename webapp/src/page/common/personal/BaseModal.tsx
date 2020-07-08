import React from "react";

import UserHub from '@/page/common/personal/Userhub';
import Settings from '@/page/common/personal/Settings';
import modelConnect from '@/page/common/personal/ModelConnect';

export interface IProps {
    personalItemKey?: string;
}
export interface IState {
}

class BaseModal extends React.Component<IProps, IState> {

    render() {
        // console.log('@personalItemKey:', this.props.personalItemKey)
        return (
            <div>
                {this.props.personalItemKey === "userhub" ? <UserHub /> : ""}
                {this.props.personalItemKey === "settings" ? <Settings /> : ""}
            </div>
        );
    }
}

export default modelConnect(BaseModal);
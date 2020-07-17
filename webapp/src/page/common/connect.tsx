import React from "react";

export interface ConnectProps {

}

export interface ConnectState {

}

class Connect extends React.Component<ConnectProps, ConnectState> {
    constructor(props: ConnectProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                空白页面
            </div>
        );
    }
}

export default Connect;
import * as React from 'react';

export interface IProps {

}

export interface IState {

}

class LogsMonitor extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        return (
            <div>
                LogsMonitor 日志监听
            </div>
        );
    }
}

export default LogsMonitor;
import React from "react";

export interface PowerProps {

}

export interface PowerState {

}

class Power extends React.Component<PowerProps, PowerState> {
    constructor(props: PowerProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                Power
            </div>
        );
    }
}

export default Power;
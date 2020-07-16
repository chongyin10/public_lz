import React from "react";

export interface indexProps {

}

export interface indexState {

}

class Index extends React.Component<indexProps, indexState> {
    constructor(props: indexProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export default Index;
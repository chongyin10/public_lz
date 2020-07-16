import React from "react";

export interface NotFoundProps {

}

export interface NotFoundState {

}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
    constructor(props: NotFoundProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                没有发现网页
            </div>
        );
    }
}

export default NotFound;
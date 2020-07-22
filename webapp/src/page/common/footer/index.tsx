import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

export interface FooterProps {

}

export interface FooterState {

}

class VFooter extends React.Component<FooterProps, FooterState> {

    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        );
    }
}

export default VFooter;
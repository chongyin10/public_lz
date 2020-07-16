import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;
export interface ContentProps {

}

export interface ContentState {

}

class VContent extends React.Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        );
    }
}

export default VContent;
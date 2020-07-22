import React from "react";
import { Layout } from 'antd';
import ContentRouter from '@/page/router/contentRouter';

const { Content } = Layout;
export interface VContentProps {

}

export interface VContentState {

}

class VContent extends React.Component<VContentProps, VContentState> {

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
                    <ContentRouter/>
                </Content>
            </Layout>
        );
    }
}

export default VContent;
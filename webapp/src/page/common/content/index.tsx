import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

import User from '@/page/components/system/user';
import UserGroup from '@/page/components/system/userGroup';
import Power from '@/page/components/system/power';
import PowerGroup from '@/page/components/system/powerGroup';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ContentRouter from '@/page/router/contentRouter';

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
                    <ContentRouter />
                </Content>
            </Layout>
        );
    }
}

export default VContent;
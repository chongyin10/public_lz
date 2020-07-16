import React from "react";
import { Layout, Menu, Spin } from 'antd';
import { Footer, Content, Sider, Header } from '@/page/common';

import '@/page/components/index.scss';

export interface IProps {
    loading?: Boolean;
    setLoading(loading: Boolean, callback: () => void): void;
}

export interface IState {

}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await this.props.setLoading(false, () => { });
    }

    render() {
        return (
            <Spin spinning={Boolean(false)} tip="Loading...">
                <div style={{ height: window.innerHeight }}>
                    <Layout>
                        <Header {...this.props} />
                        <Layout>
                            <Sider {...this.props} />
                            <Content {...this.props} />
                        </Layout>
                        <Footer {...this.props} />
                    </Layout>
                </div>
            </Spin >
        );
    }
}

export default App;
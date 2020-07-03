import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Layout, Menu, Breadcrumb } from 'antd';

import Router from '@/page/routers';
import { withRouter } from 'react-router-dom';
import { IMenu } from '@/page/interface/app';

const { Content } = Layout;

export interface IProps {
    registerList?: IMenu,
}

interface State {
}

/**
 * Layout
 */
@withRouter
class VLayout extends React.Component<IProps, State> {
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
                    <div className="content">
                        <Router registerList={this.props.registerList}/>
                    </div>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = (state: any) => ({
    registerList: state.RApp.registerList,

});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VLayout);


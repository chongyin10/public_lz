import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Layout, Menu } from 'antd';

const { Footer } = Layout;

export interface IVFooterProps {
}

interface State {
}

/**
 * Side二级目录类
 */
class VFooter extends React.Component<IVFooterProps, State> {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>@www.chongyin.com</Footer>
        );
    }
}

const mapStateToProps = (state: any) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VFooter);


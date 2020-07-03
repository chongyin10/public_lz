import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { getTest } from '@/page/redux/test';
import { TestInfo, TestInfoResponse } from '@/page/interface/test';


export interface ITestViewProps {
    form: any;
    history: any;
    testList: TestInfoResponse;
    onGetTest(param: TestInfo, callback: () => void): void;
}

class TestView extends React.Component<ITestViewProps> {

    componentDidMount() {
        this.props.onGetTest({}, () => { })
    }

    render() {
        return (
            <div>
                TestView
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    testList: state.RTest.testList
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetTest: getTest,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TestView);

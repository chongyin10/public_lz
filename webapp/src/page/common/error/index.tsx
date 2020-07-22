import React from "react";
import { Dispatch, bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import '@/page/common/error/index.scss';
import error404 from '@/page/static/images/error.png';
import { loginInterceptor } from "@/page/utils/interceptor";
import { oneLevelKeyFun, initModules, twoLevelKeyFun, threeLevelKeyFun } from "@/page/redux/common";

export interface NotFoundProps {
    onOneLevelKeyFun(moudleKeyAll: any): void;
    onTwoLevelKeyFun(twoLevelKey: any): void;
    onThreeLevelKeyFun(threeLevelKey: any): void;
    onInitModules(): void;
}

export interface NotFoundState {
    time?: any;
}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {

    constructor(props: NotFoundProps) {
        super(props);
        this.state = {
            time: 5
        }
    }

    componentDidMount() {
        let interval = setInterval(() => {
            let _newTime = this.state.time;
            if (_newTime > 0) {
                this.setState({
                    time: _newTime - 1
                })
            } else {
                loginInterceptor(this.props);
                this.props.onInitModules();
                this.props.onOneLevelKeyFun(null);
                this.props.onTwoLevelKeyFun(null);
                this.props.onThreeLevelKeyFun(null)
                clearInterval(interval)
            }
        }, 1000);
    }

    render() {
        return (
            <div className='notFound'>
                <img src={error404} />
                <div className='notFound-title'>
                    <h1 className='notFound-h1'>404</h1>
                    <h3>未找到相应的页面，请检查网络或稍后重试！</h3>
                    <h4 className='notFound-h5'><span className='notFound-h5-span'>{this.state.time}</span>s后自动返回系统页面</h4>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => ({
    login: state.RLogin.login
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onOneLevelKeyFun: oneLevelKeyFun,
    onInitModules: initModules,
    onTwoLevelKeyFun: twoLevelKeyFun,
    onThreeLevelKeyFun: threeLevelKeyFun
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
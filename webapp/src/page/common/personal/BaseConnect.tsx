import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModelConnect from '@/page/common/personal/ModelConnect';
import * as Tdispatch from '@/page/redux/app';

export interface IProps {
    title?: string;
}

interface IState {

}

export default (modalOtherOption?: any) => (BaseComponent: any) => {

    class BaseConnect extends React.Component<IProps, IState>  {

        render() {
            return (
                <BaseComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = (state: any) => ({
        ...state.RApp,
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        ...Tdispatch
    }, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(ModelConnect(modalOtherOption)(BaseConnect));
}

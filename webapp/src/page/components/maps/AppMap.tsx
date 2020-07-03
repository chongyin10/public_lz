import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import LMap from './LMap';
import '@/leaflet'
import { LMapObj } from '../../interface/map';
import { GET_MAP } from '../../constants/actions';

export interface IAppProps {
    history: any;
    map: LMapObj;
    dispatch: Dispatch
}

interface State {

}

class AppMap extends React.Component<IAppProps, State> {

    componentDidMount() {
        let map: LMap = new LMap('map', this.props.dispatch);
        let leatControl: any = document.querySelector('.leaflet-control-attribution');
        let a_title: any = leatControl.querySelector('a');
        a_title.innerHTML = 'chongyin_good@163.com';
        a_title.setAttribute("href", 'www.baidu.com');
    }

    render() {
        return (
            <div id='map' style={{ height: '465px', width: 'auto' }}></div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    map: state.LMap.Lmap
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    dispatch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppMap);

import * as T from '@/page/constants/actions';
import { initState, Action } from '@/page/redux/common/state';
import { Dispatch } from 'redux';

/**
 * 全局加载spin
 * @param param 
 */
export function setLoading(loading: boolean) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_SPIN_LOADING,
            payload: loading
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.SET_SPIN_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

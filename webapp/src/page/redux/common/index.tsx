import * as T from '@/page/constants/actions';
import * as Api from '@/page/constants/api';
import { initState, Action } from '@/page/redux/common/state';
import { Dispatch } from 'redux';
import { post } from '@/page/utils/request';

/**
 * 加载module模块
 */
export function getModules() {
    return (dispatch: Dispatch) => {
        post(Api.getModuleList, {}).then((res: any) => {
            dispatch({
                type: T.MODULE_LIST,
                payload: res
            })
        })
    }
}

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

/**
 * 设置所有的menu点击key值
 * @param moudleKey 
 */
export function moudleKeyAll(moudleKey: any) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.MENU_ALL_KEY,
            payload: moudleKey
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
        case T.MODULE_LIST:
            return {
                ...state,
                moduleList: action.payload
            }
        case T.MENU_ALL_KEY:
            return {
                ...state,
                moudleKey: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

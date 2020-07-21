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
 * 设置一级key
 * @param moudleKey 
 */
export function oneLevelKeyFun(oneLevelKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.ONE_LEVEL_KEY,
            payload: oneLevelKey
        })
    }
}
/**
 * 设置二级key
 * @param moudleKey 
 */
export function twoLevelKeyFun(twoLevelKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.TWO_LEVEL_KEY,
            payload: twoLevelKey
        })
    }
}
/**
 * 设置三级key
 * @param moudleKey 
 */
export function threeLevelKeyFun(threeLevelKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.THERR_LEVEL_KEY,
            payload: threeLevelKey
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
        case T.ONE_LEVEL_KEY:
            return {
                ...state,
                oneLevelKey: action.payload
            }
        case T.TWO_LEVEL_KEY:
            return {
                ...state,
                twoLevelKey: action.payload
            }
        case T.THERR_LEVEL_KEY:
            return {
                ...state,
                threeLevelKey: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

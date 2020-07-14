import { get, post } from '../../utils/request';
import _ from 'lodash';
import { Dispatch } from 'redux';
import { getUserInfo, getApiAll } from '../../constants/api';
import * as T from '../../constants/actions';
import { initState, Action } from '@/page/redux/system/state';
import { UserInfo } from '@/page/interface/user';

/**
 *  注销用户
 * @param userInfo 
 */
export function setUsers(userInfo: any) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_USER_INFO,
            payload: userInfo
        });
    }
}

/**
 * 加载值
 * @param skin 
 */
export function setSpin(skin: boolean) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SKIN_BOOLEAN,
            payload: skin
        });
    }
}

/**
 * 获取用户
 * @param userInfo 
 */
export function getUsers(userInfo: any) {
    return (dispatch: Dispatch) => {
        post(getUserInfo, userInfo).then((res: any) => {
            window.sessionStorage.setItem('sessionUserInfo', JSON.stringify(res));
            dispatch({
                type: T.GET_USER_INFO,
                payload: res,
            })
        })
    }
}

export function getApiList(itemid: any) {
    return (dispatch: Dispatch) => {
        post(getApiAll, { itemid }).then((res: any) => {
            dispatch({
                type: T.GET_API_LIST,
                payload: JSON.stringify(res?.length > 0 ? res : undefined)
            })
        })
    }
}

export function getApiByPath(path: string, user?: any) {
    return (dispatch: Dispatch) => {
        post(path, { param: user }).then((res: any) => {
            dispatch({
                type: T.GET_USER_ALL,
                payload: JSON.stringify(res?.length > 0 ? res : undefined),
            })
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
                skin: false,
            }
        case T.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case T.SKIN_BOOLEAN:
            return {
                ...state,
                skin: action.payload
            }
        case T.GET_API_LIST:
            return {
                ...state,
                apiList: action.payload
            }
        case T.GET_USER_ALL:
            return {
                ...state,
                apiData: action.payload
            }
        default:
            return state
    }
}

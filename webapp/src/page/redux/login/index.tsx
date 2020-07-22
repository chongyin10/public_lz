import { get, del, post } from '@/page/utils/request.tsx';
import * as T from '@/page/constants/actions';
import { initState, Action } from '@/page/redux/login/state';
import { Dispatch } from 'redux';
import * as Api from '@/page/constants/api';

import { UserList, User } from "@/page/interface/user"

/**
 * 初始化登录信息
 */
export function initLoginUser() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.GET_LOGIN_USER,
            payload: []
        })
    }
}

/**
 * 获取登录信息
 * @param param 
 */
export function getLoginUser(user: User) {
    return (dispatch: Dispatch) => {
        post(Api.getLoginUser, user).then((res: any) => {
            dispatch({
                type: T.GET_LOGIN_USER,
                payload: res
            })
        })
    }
}

/**
 * 初始化登录提示框
 * @param loginNotification 
 */
export function initLoginNotification(loginNotification: Boolean) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.INIT_LOGIN_NOTIFICATION,
            payload: loginNotification
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.GET_LOGIN_USER:
            return {
                ...state,
                login: action.payload,
            }
        case T.INIT_LOGIN_NOTIFICATION:
            return {
                ...state,
                loginNotification: action.payload
            }
        default:
            return state
    }
}

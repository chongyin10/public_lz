import { get, del, post } from '../../utils/request';
import * as T from '@/page/constants/actions';
import { initState, Action } from '@/page/redux/login/state';
import { Dispatch } from 'redux';
import * as Api from '@/page/constants/api';

import { UserList, User } from "@/page/interface/user"

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

export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.GET_LOGIN_USER:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}

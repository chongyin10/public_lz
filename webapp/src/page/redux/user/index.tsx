import { get, del, post } from '@/page/utils/request';
import * as T from '@/page/constants/actions';
import { initState, Action } from '@/page/redux/user/state';
import { Dispatch } from 'redux';
import * as Api from '@/page/constants/api';
import { UserList, User } from '@/page/interface/user';

/**
 * 获取用户
 * @param param 
 */
export function getUserAll(user: User, page?: Number) {
    return (dispatch: Dispatch) => {
        post(Api.getUserAll, { page: page ? page : 0, data: user }).then((res: any) => {
            dispatch({
                type: T.GET_USER_ALL,
                payload: res
            })
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.GET_USER_ALL:
            return {
                ...state,
                userAll: action.payload
            }
        default:
            return state
    }
}

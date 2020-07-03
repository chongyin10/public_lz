import { get, del } from '../../utils/request';
import _ from 'lodash';
import { UserInfoResponse, UserInfo } from '../../interface/user';
import { Dispatch } from 'redux';
import { getUserInfo } from '../../constants/api';
import { GET_USER_INFO } from '../../constants/actions';

// 定义存储用户list
type State = {
    userList: UserInfoResponse
}
// 初始化user
const initState: State = {
    userList: []
}
// 定义payload：Action
type Action = {
    type: string;
    payload: any;
}

/**
 * 获取用户
 * @param param 
 */
export function getUsers(param: UserInfo) {
    return (dispatch: Dispatch) => {
        get(getUserInfo, param).then((res: any) => {
            dispatch({
                type: GET_USER_INFO,
                payload: res.data
            })
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case GET_USER_INFO:
            let data = action.payload
            return {
                ...state,
                userList: data
            }
        default:
            return state
    }
}

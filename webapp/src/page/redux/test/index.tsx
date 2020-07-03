import { get, del } from '../../utils/request';
import _ from 'lodash';
import { TestInfoResponse, TestInfo } from '../../interface/test';
import { Dispatch } from 'redux';
import { getTestList } from '../../constants/api';
import { GET_TEST } from '../../constants/actions';

// 定义类型
type State = {
    testList: TestInfoResponse
}
// 初始化test
const initState: State = {
    testList: []
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
export function getTest(param: TestInfo) {
    return (dispatch: Dispatch) => {
        get(getTestList, param).then((res: any) => {
            dispatch({
                type: GET_TEST,
                payload: res.data
            })
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case GET_TEST:
            let data = action.payload
            return {
                ...state,
                userList: data
            }
        default:
            return state
    }
}

import { get, del } from '../../utils/request';
import * as T from '@/page/constants/actions';
import { initState, Action } from '@/page/redux/test/state';
import { Dispatch } from 'redux';
import * as Api from '@/page/constants/api';

import { TestEntityList, TestEntity } from "@/page/interface/test"

/**
 * 获取用户
 * @param param 
 */
export function getTestList(testList: TestEntity) {
    return (dispatch: Dispatch) => {
        get(Api.getTestList, testList).then((res: any) => {
            dispatch({
                type: T.GET_TEST_LIST,
                payload: res.data
            })
        })
    }
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.GET_TEST_LIST:
            return {
                ...state,
                testList: action.payload
            }
        default:
            return state
    }
}

import { Dispatch } from 'redux';
import { GET_MAP } from '../../constants/actions';
import { LMapObj } from '../../interface/map';

// 定义存储用户list
type State = {
    Lmap: LMapObj
}
// 初始化user
const initState: State = {
    Lmap: []
}
// 定义payload：Action
type Action = {
    type: string;
    payload: any;
}

export default function (state = initState, action: Action) {
    switch (action.type) {
        case GET_MAP:
            let data = action.payload
            return {
                ...state,
                Lmap: data
            }
        default:
            return state
    }
}
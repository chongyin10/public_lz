import * as T from '@/page/constants/actions';
import * as Api from '@/page/constants/api';
import { initState, Action } from '@/page/redux/common/state';
import { Dispatch } from 'redux';
import { post } from '@/page/utils/request.tsx';

/**
 * 初始化module列表数据
 */
export function initModules() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.INIT_MODULE_LIST,
            payload: []
        })
    }
}

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
 * @param loading true | false
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
export function oneLevelKeyFun(oneLevelKey: any) {
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
export function twoLevelKeyFun(twoLevelKey: any) {
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
export function threeLevelKeyFun(threeLevelKey: any) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.THERR_LEVEL_KEY,
            payload: threeLevelKey
        })
    }
}

/**
 * 加载api
 */
export function getApiAll() {
    return (dispatch: Dispatch) => {
        post(Api.getApiAll, {}).then((res: any) => {
            dispatch({
                type: T.GET_API_ALL,
                payload: res
            })
        })
    }
}

/**
 * 查询条件方法
 * @param searchForm 检索条件
 */
export function setSearchForm(searchForm: any) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SEARCH_FORM,
            payload: searchForm
        })
    }
}

/**
 * 更新操作
 * @param api 接口api
 * @param data form数据表单
 */
export function updateDataForm(api: string, data: any) {
    return (dispatch: Dispatch) => {
        post(api, data).then((res: any) => {
            dispatch({
                type: T.UPDATE_DATA,
                payload: res
            })
        })
    }
}

/**
 * 新增操作
 * @param api 接口api
 * @param data form数据表单
 */
export function addDataForm(api: string, data: any) {
    return (dispatch: Dispatch) => {
        post(api, { data }).then((res: any) => {
            console.log('@res:', res)
            dispatch({
                type: T.ADD_DATA,
                payload: {
                    addData: res,
                    modalVisible: res.length == 0 ? true : false  // 是否关闭modal
                }
            })
        })
    }
}

/**
 * modal窗口显隐
 * @param modalVisible true | false
 */
export function onModalCancel(modalVisible: Boolean) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.MODAL_VISIBLE,
            payload: modalVisible
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
        case T.INIT_MODULE_LIST:
            return {
                ...state,
                moduleList: action.payload
            }
        case T.GET_API_ALL:
            return {
                ...state,
                apiList: action.payload
            }
        case T.SEARCH_FORM:
            return {
                ...state,
                searchForm: action.payload
            }
        case T.ON_MODAL_OK:
            return {
                ...state,
                modalFormData: action.payload
            }
        case T.MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: action.payload
            }
        case T.UPDATE_DATA:
            return {
                ...state,
                updateData: action.payload
            }
        case T.ADD_DATA:
            return {
                ...state,
                addData: action.payload.addData,
                modalVisible: action.payload.modalVisible
            }
        default:
            return {
                ...state
            }
    }
}

import * as T from '@/page/constants/actions';
import * as Api from '@/page/constants/api';
import { initState, Action } from '@/page/redux/common/state';
import { Dispatch } from 'redux';
import { post } from '@/page/utils/request.tsx';
import store from '@/page/redux/store';
import { dataTrim } from '@/page/utils/common';

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
export function spinLoading(loading: boolean) {
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
 * 设置查询条件值
 * @param searchForm 检索条件值 key-valye
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
 * 查询list操作
 * @param api 接口path
 * @param searchData 检索值
 * @param page 当前页码
 */
export function getListData(api: string, searchData: any, page: Number = 1) {
    let _data = dataTrim(searchData);
    return (dispatch: Dispatch) => {
        post(api, { page, data: _data }).then((res: any) => {
            dispatch({
                type: T.LIST_DATA,
                payload: res
            })
        })
    }
}


/**
 * 更新操作
 * @param api 接口api
 * @param data form数据表单
 * @param id 更新主键id
 */
export function updateDataForm(api: string, data: any, id: number | string, page: number) {
    return (dispatch: Dispatch) => {
        post(api, { data, id, page }).then((res: any) => {
            let { RCom: { listData } }: any = store.getState();
            let _listData = res.length == 0 ? listData : res;
            dispatch({
                type: T.UPDATE_DATA,
                payload: {
                    updateData: res,
                    listData: _listData, // 更新list列表
                    modalVisible: res ? false : true  // 是否关闭modal
                }
            })
        })
    }
}

/**
 * 获取单数据集
 * @param api 
 * @param data 
 */
export function getDataByIdForm(api: string, id: number | string) {
    return (dispatch: Dispatch) => {
        post(api, { id }).then((res: any) => {
            dispatch({
                type: T.DATA,
                payload: {
                    data: res,
                    modalVisible: res.length == 0 ? false : true  // 是否关闭modal
                }
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
        let { RCom: { listData, currentPage } }: any = store.getState();
        post(api, { data, page: currentPage }).then((res: any) => {
            let _listData = res.length == 0 ? listData : res;
            dispatch({
                type: T.ADD_DATA,
                payload: {
                    addData: res,
                    listData: _listData, // 更新list列表
                    modalVisible: res.length == 0 ? true : false  // 是否关闭modal
                }
            })
        })
    }
}

/**
 * 删除操作
 * @param api 接口
 * @param id 主键id
 */
export function deleteData(api: string, id: Number | string) {
    return (dispatch: Dispatch) => {
        let { RCom: { listData, currentPage } }: any = store.getState();
        post(api, { id, page: currentPage }).then((res: any) => {
            let _listData = res.length == 0 ? listData : res;
            dispatch({
                type: T.DEL_DATA,
                payload: {
                    delData: res,
                    listData: _listData, // 更新list列表
                    currentPage: res['limit'] ? res['limit'] : currentPage // 返回的当前显示页码
                }
            })
        });
    }
}

/**
 * modal窗口显隐
 * @param modalVisible true | false
 */
export function onModalCancel(modalVisible: Boolean) {
    return async (dispatch: Dispatch) => {
        await dispatch({
            type: T.MODAL_VISIBLE,
            payload: modalVisible
        })
    }
}

/**
 * 初始化listData数据
 */
export function initListData() {
    return async (dispatch: Dispatch) => {
        await dispatch({
            type: T.INIT_LIST_DATA,
            payload: []
        })
    }
}

/**
 * 初始化data数据集
 */
export function initData() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.DATA,
            payload: {
                data: []
            }
        })
    }
}

/**
 * 设置当前页码
 * @param currentPage 
 */
export function setCurrentPage(currentPage: Number) {
    return async (dispatch: Dispatch) => {
        await dispatch({
            type: T.CURRENT_PAGE,
            payload: currentPage
        })
    }
}

/**
 * 设置id
 * @param ids 主键id
 */
export function setIds(ids: any) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.IDS,
            payload: ids
        })
    }
}

// export function getModuleByLevel(level: number) {
//     return (dispatch: Dispatch) => {
//         post(api, data).then((res: any) => {
//             let { RCom: { listData } }: any = store.getState();
//             let _listData = res.length == 0 ? listData : res;
//             dispatch({
//                 type: T.UPDATE_DATA,
//                 payload: _listData
//             })
//         })
//     }
// }


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
                updateData: action.payload.updateData,
                listData: action.payload.listData,
                modalVisible: action.payload.modalVisible,
                data: [],
                ids: undefined
            }
        case T.DATA:
            return {
                ...state,
                data: action.payload.data,
                modalVisible: action.payload.modalVisible
            }
        case T.ADD_DATA:
            return {
                ...state,
                addData: action.payload.addData,
                listData: action.payload.listData,
                modalVisible: action.payload.modalVisible,
            }
        case T.DEL_DATA:
            return {
                ...state,
                delData: action.payload.delData,
                listData: action.payload.listData,
                currentPage: action.payload.currentPage
            }
        case T.CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case T.LIST_DATA:
            return {
                ...state,
                listData: action.payload
            }
        case T.INIT_LIST_DATA:
            return {
                ...state,
                listData: action.payload
            }
        case T.IDS:
            return {
                ...state,
                ids: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

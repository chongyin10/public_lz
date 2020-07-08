import { Dispatch } from 'redux';
import { get, del } from '@/page/utils/request';
import { getMenuList, getRegister } from '@/page/constants/api';
import { getDefItemOpenKey } from '@/page/redux/common';
import * as T from '@/page/constants/actions';
import { initState, Action } from '@/page/redux/app/state';

/**
 * 设置一级级目录点击key值
 * @param itemOpenKey 
 */
export function setItemOpenKey(itemOpenKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_ITEM_OPEN_KEY,
            payload: itemOpenKey
        });
    }
}
/**
 * 设置二级级目录点击key值
 * @param subItemOpenKey 
 */
export function setSubItemOpenKey(subItemOpenKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_SUB_ITEM_OPEN_KEY,
            payload: subItemOpenKey
        });
    }
}
/**
 * 设置三级级目录点击key值
 * @param chiItemOpenKey 
 */
export function setChiItemOpenKey(chiItemOpenKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_CHI_ITEM_OPEN_KEY,
            payload: chiItemOpenKey
        });
    }
}
/**
 * 个人中心状态方法：false：关闭，true：打开
 * @param modalVisible 
 */
export function onModalStatus(modalVisible: boolean) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_MODAL_VISIBLE,
            payload: modalVisible
        })
    }
}

/**
 * moddal属性
 * @param modalOption 
 */
export function onModalOption(modalOtherOption: any) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: T.SET_MODAL_OPTION,
            payload: modalOtherOption
        })
    }
}

/**
 * 获取Item菜单
 * @param param 
 */
export function getItems(param: number) {
    return (dispatch: Dispatch) => {
        get(getMenuList, { level: param }).then((res: any) => {
            dispatch({
                type: T.GET_MENUS_LIST,
                payload: res
            })
        })
    }
}

/**
 * 二级菜单栏目录
 * @param level 
 * @param parent 
 */
export function getSubMenus(level: number, menuItem: number) {
    return (dispatch: Dispatch) => {
        get(getMenuList, { level, menuItem }).then((res: any) => {
            dispatch({
                type: level === 1 ? T.GET_SUB_MENUS_LIST : T.GET_CHI_MENUS_LIST,
                payload: res
            })
        })
    }
}

/**
 * 注册器
 */
export function getRegisterList() {
    return (dispatch: Dispatch) => {
        get(getRegister, {}).then((res: any) => {
            dispatch({
                type: T.GET_REGISTER,
                payload: res
            })
        })
    }
}

/**
 * 
 * @param state 
 * @param action 
 */
export default function (state = initState, action: Action) {
    switch (action.type) {
        case T.GET_MENUS_LIST:
            return {
                ...state,
                itemList: action.payload,
                defaultSelectedKeys: getDefItemOpenKey(action.payload)
            }
        case T.GET_SUB_MENUS_LIST:
            return {
                ...state,
                subItemList: action.payload
            }
        case T.GET_CHI_MENUS_LIST:
            return {
                ...state,
                childrenItemList: action.payload
            }
        case T.SET_ITEM_OPEN_KEY:
            return {
                ...state,
                itemOpenKey: action.payload
            }
        case T.SET_SUB_ITEM_OPEN_KEY:
            return {
                ...state,
                subItemOpenKey: action.payload
            }
        case T.SET_CHI_ITEM_OPEN_KEY:
            return {
                ...state,
                chiItemOpenKey: action.payload
            }
        case T.GET_REGISTER:
            return {
                ...state,
                registerList: action.payload
            }
        case T.SET_MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: action.payload
            }
        case T.SET_MODAL_OPTION:
            return {
                ...state,
                modalOtherOption: action.payload
            }
        default:
            return state
    }
}

import { Dispatch } from 'redux';
import { get, del } from '@/page/utils/request';
import { IApp, IMenu, Meuns } from '@/page/interface/app';
import { getMenuList, getRegister } from '@/page/constants/api';
import { getDefItemOpenKey } from '@/page/redux/common';
import {
    GET_MENUS_LIST,
    GET_SUB_MENUS_LIST,
    GET_CHI_MENUS_LIST,
    SET_ITEM_OPEN_KEY,
    SET_SUB_ITEM_OPEN_KEY,
    SET_CHI_ITEM_OPEN_KEY,
    GET_REGISTER
} from '@/page/constants/actions';
import { func } from 'prop-types';

type State = {
    itemList: IMenu,
    subItemList: IMenu,
    childrenItemList: IMenu,
    defaultSelectedKeys: string;
    itemOpenKey: string, // 根目录选中值
    subItemOpenKey: string, // 一级目录选中值
    chiItemOpenKey: string // 二级目录选中值
    registerList: any[];
}
const initState: State = {
    itemList: [],  // 菜单栏目录
    subItemList: [], // 二级菜单栏目录
    childrenItemList: [], // 三级目录结构
    itemOpenKey: "0", // 根目录选中值
    subItemOpenKey: "0", // 一级目录选中值
    chiItemOpenKey: "0", // 二级目录选中值
    defaultSelectedKeys: "0",
    registerList: []
}
type Action = {
    type: string,
    payload: any,
}

export function setItemOpenKey(itemOpenKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: SET_ITEM_OPEN_KEY,
            payload: itemOpenKey
        });
    }
}
export function setSubItemOpenKey(subItemOpenKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: SET_SUB_ITEM_OPEN_KEY,
            payload: subItemOpenKey
        });
    }
}
export function setChiItemOpenKey(chiItemOpenKey: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: SET_CHI_ITEM_OPEN_KEY,
            payload: chiItemOpenKey
        });
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
                type: GET_MENUS_LIST,
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
                type: level === 1 ? GET_SUB_MENUS_LIST : GET_CHI_MENUS_LIST,
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
                type: GET_REGISTER,
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
        case GET_MENUS_LIST:
            return {
                ...state,
                itemList: action.payload,
                defaultSelectedKeys: getDefItemOpenKey(action.payload)
            }
        case GET_SUB_MENUS_LIST:
            return {
                ...state,
                subItemList: action.payload
            }
        case GET_CHI_MENUS_LIST:
            return {
                ...state,
                childrenItemList: action.payload
            }
        case SET_ITEM_OPEN_KEY:
            return {
                ...state,
                itemOpenKey: action.payload
            }
        case SET_SUB_ITEM_OPEN_KEY:
            return {
                ...state,
                subItemOpenKey: action.payload
            }
        case SET_CHI_ITEM_OPEN_KEY:
            return {
                ...state,
                chiItemOpenKey: action.payload
            }
        case GET_REGISTER:
            return {
                ...state,
                registerList: action.payload
            }
        default:
            return state
    }
}

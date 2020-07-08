import { IMenu } from "@/page/interface/app"
import { ReactNode } from "react"

export type State = {
    itemList: IMenu,
    subItemList: IMenu,
    childrenItemList: IMenu,
    defaultSelectedKeys: string;
    itemOpenKey: string, // 根目录选中值
    subItemOpenKey: string, // 一级目录选中值
    chiItemOpenKey: string // 二级目录选中值
    registerList: any[];
    modalVisible: boolean; // 个人中心状态值
    modalOtherOption: {
        title?: string;
        visible?: boolean;
        width?: Number | string;
        okText?: string;
        cancelText?: string
    };
    personalItemKey?: string;
}
export const initState: State = {
    itemList: [],  // 菜单栏目录
    subItemList: [], // 二级菜单栏目录
    childrenItemList: [], // 三级目录结构
    itemOpenKey: "0", // 根目录选中值
    subItemOpenKey: "0", // 一级目录选中值
    chiItemOpenKey: "0", // 二级目录选中值
    defaultSelectedKeys: "0",
    registerList: [],
    modalVisible: false,  // 默认false
    modalOtherOption: {
        title: "",
        okText: '确认',
        cancelText: '取消',
    },
    personalItemKey: undefined
}
export type Action = {
    type: string,
    payload: any,
}
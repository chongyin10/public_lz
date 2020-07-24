import { ModuleList } from "@/page/interface/module";
import { perItem } from '@/page/constants/options';

export type State = {
    loading: Boolean,
    moduleList: ModuleList,
    apiList: any;
    perItem: any[],
    oneLevelKey: any; // 一级key
    twoLevelKey: any; // 二级key
    threeLevelKey: any; // 三级key
    searchForm: any;
    modalVisible: Boolean;
    updateData: Boolean;  // 是否更新成功
    addData: Boolean;  // 新增状态
    delData: Boolean;  // 删除状态
}

export const initState: State = {
    loading: false,
    moduleList: [],
    apiList: [],
    perItem: perItem,
    oneLevelKey: undefined,
    twoLevelKey: undefined,
    threeLevelKey: undefined,
    searchForm: undefined,
    modalVisible: false,
    updateData: false,
    addData: false,
    delData: false
}

export type Action = {
    type: string,
    payload: any,
}
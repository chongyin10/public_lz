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

    listData: any;
    updateData: Boolean;  // 是否更新成功
    addData: Boolean;  // 新增状态
    delData: Boolean;  // 删除状态

    pageCount: Number; // 总条数
    currentPage: Number; // 当前页码
    pageSize: Number; // 当前页显示多少条数据
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
    
    listData: [],
    updateData: false,
    addData: false,
    delData: false,

    pageCount: 0,
    currentPage: 1,
    pageSize: 10,
}

export type Action = {
    type: string,
    payload: any,
}
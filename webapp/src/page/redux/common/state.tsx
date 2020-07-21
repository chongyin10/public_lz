import { ModuleList } from "@/page/interface/module";
import { perItem } from '@/page/constants/options';

export type State = {
    loading: Boolean,
    moduleList: ModuleList,
    perItem: any[],
    oneLevelKey: any; // 一级key
    twoLevelKey: any; // 二级key
    threeLevelKey: any; // 三级key
}

export const initState: State = {
    loading: false,
    moduleList: [],
    perItem: perItem,
    oneLevelKey: undefined,
    twoLevelKey: undefined,
    threeLevelKey: undefined,
}

export type Action = {
    type: string,
    payload: any,
}
import { ModuleList } from "@/page/interface/module";
import { perItem } from '@/page/constants/options';

export type State = {
    loading: Boolean,
    moduleList: ModuleList,
    perItem: any[],
    moudleKey: {
        oneLevelKey: any;
        twoLevelKey: any;
        threeLevelKey: any;
    },
}

export const initState: State = {
    loading: false,
    moduleList: [],
    perItem: perItem,
    moudleKey: {
        oneLevelKey: undefined,
        twoLevelKey: undefined,
        threeLevelKey: undefined,
    }
}

export type Action = {
    type: string,
    payload: any,
}
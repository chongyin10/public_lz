
/**
 * module基本信息
 */
export interface Module {
    id?: Number;
    code?: string;
    name?: number;
    rid?: Number;
    weight?: Number;
    identification?: Number;
    url?: string;
}

export type ModuleList = Module[] | undefined
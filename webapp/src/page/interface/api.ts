
/**
 * api基本信息
 */
export interface Api {
    id?: Number;
    code?: string;
    name?: string;
    path?: string;
    moduleid?: Number;
    type?: Number;
    system?: number;
    createTime?: string;
}

export type ApiList = Api[] | undefined
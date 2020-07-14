import { UserInfoResponse, UserInfo } from "@/page/interface/user"

// 定义存储用户list
type State = {
    userList: UserInfoResponse,
    userInfo: UserInfoResponse,
    skin: boolean;
    apiList: any; // api接口
    apiData: any;
}
// 初始化user
export const initState: State = {
    userList: [],
    userInfo: [],
    skin: false,
    apiList: {},
    apiData: []
}
// 定义payload：Action
export type Action = {
    type: string;
    payload: any;
}
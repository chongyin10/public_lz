import { UserInfoResponse, UserInfo } from "@/page/interface/user"

// 定义存储用户list
type State = {
    userList: UserInfoResponse,
    userInfo: UserInfoResponse,
    skin: boolean;
}
// 初始化user
export const initState: State = {
    userList: [],
    userInfo: [],
    skin: false,
}
// 定义payload：Action
export type Action = {
    type: string;
    payload: any;
}
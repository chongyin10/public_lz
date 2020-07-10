
/**
 * 用户基本信息
 */
export interface UserInfo {
    id?: number;
    code?: number;
    username?: string;
    password?: string;
}

export type UserInfoResponse = UserInfo[] | undefined;


/**
 * 用户基本信息
 */
export interface UserInfo {
    id?: number;
    code?: number;
    username?: string;
    password?: string;
    createdAt?: Date;
}

export type UserInfoResponse = UserInfo[] | undefined
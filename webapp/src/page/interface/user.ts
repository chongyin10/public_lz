export interface User {
    id?: Number;
    code?: string;
    name?: string;
    password?: string;
    status?: Number
}

export type UserList = User[] | undefined
export interface User {
    id?: Number;
    code?: string;
    name?: string;
    password?: string;
    status?: Number;
    lastTime?: string;
}

export type UserList = User[] | undefined
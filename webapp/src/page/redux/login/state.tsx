import { UserList } from "@/page/interface/user"

export type State = {
    login: UserList,
}

export const initState: State = {
    login: [],
}

export type Action = {
    type: string,
    payload: any,
}
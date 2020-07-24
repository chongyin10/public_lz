import { UserList } from "@/page/interface/user"

export type State = {
    userAll: UserList,
}

export const initState: State = {
    userAll: [],
}

export type Action = {
    type: string,
    payload: any,
}
import { UserList } from "@/page/interface/user"

export type State = {
    login: UserList,
    loginNotification: Boolean
}

export const initState: State = {
    login: [],
    loginNotification: false
}

export type Action = {
    type: string,
    payload: any,
}

export type State = {
    loading: Boolean,
}

export const initState: State = {
    loading: false,
}

export type Action = {
    type: string,
    payload: any,
}
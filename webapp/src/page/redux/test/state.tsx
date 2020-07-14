import { TestEntityList } from "@/page/interface/test"

export type State = {
    testList: TestEntityList,
}

export const initState: State = {
    testList: [],
}

export type Action = {
    type: string,
    payload: any,
}
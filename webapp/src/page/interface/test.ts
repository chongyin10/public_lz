
/**
 * Test基本信息
 */
export interface TestInfo {
    id?: number;
    name?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export type TestInfoResponse = TestInfo[] | undefined
import { Test } from '../models/Test';
import SqlQuery from '../utils/SqlQuery';

export default class TestDao extends Test {

    async getTestList() {
        let query = new SqlQuery("test", this);
        let items = await query.querySqlAll({ id: 1 });
        return items;
    }
}
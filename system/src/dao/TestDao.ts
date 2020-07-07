import { Test } from '../models/Test';
import SqlQuery from '../utils/SqlQuery';

export default class TestDao extends Test {

    async getList() {
        let query = new SqlQuery("test", this);
        let items = await query.querySqlAll({ id: 1 });
        return items;
    }

    async getById(id: number) {
        let item = await Test.findByPk(id)
        return item
    }
}
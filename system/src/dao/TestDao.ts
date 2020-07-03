import { Test } from '../models/Test';

export default class TestDao extends Test {

    async getList() {
        console.log(`获取getAll所有记录信息:`)
        let items = await Test.findAll({
            raw: true
        });
        return items;
    }

    async getById(id: number) {
        let item = await Test.findByPk(id)
        return item
    }
}
import { User } from '../models/User';

export default class TestDao extends User {

    async getList() {
        let items = await User.findAll({
            raw: true
        });
        return items;
    }

    async getById(id: number) {
        let item = await User.findByPk(id)
        return item
    }
}
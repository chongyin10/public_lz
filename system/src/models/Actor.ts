import { Model, Column, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'actor',
    timestamps: false,
    freezeTableName: true
})
export class Actor extends Model<Actor> {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column
    birthday?: Date;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    static async getList() {
        let items = await this.findAll({
            raw: true
        });
        console.log(`获取getAll所有记录信息:${items}`)
        return items;
    }

}

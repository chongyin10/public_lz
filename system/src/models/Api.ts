import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'api',
    timestamps: false,
    freezeTableName: true
})
export class Api extends Model<Api> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    code?: string;

    @Column
    name?: string;

    @Column
    path?: string;

    @Column
    itemid?: number;

    @Column
    type?: number;

    @Column
    createTime?: Date

}


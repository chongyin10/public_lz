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
    name?: string;

    @Column
    code?: string;

    @Column
    path?: string;

    @Column
    moduleid?: Number;

    @Column
    type?: Number;

    @Column
    createTime?: Date
}


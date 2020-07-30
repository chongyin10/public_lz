import { Model, Column, Table, PrimaryKey, AutoIncrement, Default } from "sequelize-typescript";

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

    @Default(null)
    @Column
    moduleid?: Number;

    @Default(0)
    @Column
    system?: number;

    @Default((value: any) => Number(value))
    @Column
    type?: number;

    @Default(new Date())
    @Column
    createTime?: Date
}


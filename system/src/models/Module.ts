import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'module',
    timestamps: false,
    freezeTableName: true
})
export class Module extends Model<Module> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    code?: string;

    @Column
    rid?: Number;

    @Column
    name?: string;

    @Column
    weight?: Number;

    @Column
    identification?: string;

    @Column
    url?: string;

    @Column
    level?: Number;

    @Column
    createTime?: Date;

    children?: Module;
}


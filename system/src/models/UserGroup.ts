import { Model, Column, Table, PrimaryKey, AutoIncrement, Default } from "sequelize-typescript";

@Table({
    tableName: 'usergroup',
    timestamps: false,
    freezeTableName: true
})
export class UserGroup extends Model<UserGroup> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: Number;

    @Column
    code?: string

    @Column
    name?: string;

    @Default(new Date())
    @Column
    createData?: Date;

}


import { Model, Column, Table, PrimaryKey, AutoIncrement, Default } from "sequelize-typescript";

@Table({
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
})
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: Number;

    @Column
    code?: string

    @Column
    name?: string;

    @Column
    password?: string;

    @Default(0)
    @Column
    status?: Number

    @Default(new Date())
    @Column
    lastTime?: Date;

}


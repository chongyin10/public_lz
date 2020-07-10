import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
})
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    username?: string;

    @Column
    password?: string;

    @Column
    code?: string;

    @Column
    loginTime?: Date

}


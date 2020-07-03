import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'user'
})
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    name?: string;

}


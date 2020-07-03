import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'test'
})
export class Test extends Model<Test> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    name?: string;
    
}


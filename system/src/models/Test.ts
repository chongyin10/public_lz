import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'test',
    timestamps: false,
    freezeTableName: true
})
export class Test extends Model<Test> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    name?: string;
    
}


import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: "genre"
})
export class Genre extends Model<Genre> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;


    @Column
    name!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
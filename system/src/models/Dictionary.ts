import { Model, Column, Table, PrimaryKey, AutoIncrement, ForeignKey } from "sequelize-typescript";
import { Api } from "./Api";

@Table({
    tableName: 'dictionary',
    timestamps: false,
    freezeTableName: true
})
export class Dictionary extends Model<Dictionary> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id!: Number;

    @ForeignKey(() => Api)
    @Column({ field: 'id' })
    type?: number

}


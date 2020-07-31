import { Model, Column, Table } from "sequelize-typescript";

@Table({
    tableName: 'INFORMATION_SCHEMA.COLUMNS',
    timestamps: false,
    freezeTableName: true,
})
export class SystemTable extends Model<SystemTable> {

    @Column
    table_name?: string;

    @Column
    column_name?: string

    @Column
    column_type?: string;

    @Column
    column_comment?: string;

}


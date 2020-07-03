import { Model, Column, Table, PrimaryKey, AutoIncrement, Default, IsUUID } from "sequelize-typescript";

@Table({
    tableName: 'item',
    timestamps: false,
    freezeTableName: true
})
export class Item extends Model<Item> {

    /**
     *  主键id
     */
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Default(IsUUID)
    @Column
    code?: string;

    /**
     *  名称
     */
    @Column
    name?: string;

    /** 
     *  权重
     */
    @Column
    weight?: number;

    /**
     *  级别
     */
    @Default(0)
    @Column
    level?: number;

    /**
     *  自动
     */
    @Default(0)
    @Column
    autoType?: string;

    /**
     *  url地址
     */
    @Column
    url?: string;

    @Column
    enable?: number;

    @Column
    menuItem?: number;

    @Column
    register?: string;

}


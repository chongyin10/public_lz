import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'movie'
})
export class Movie extends Model<Movie> {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @Column
    title!: string;

    @Column
    year!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class RandomNumber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;
}

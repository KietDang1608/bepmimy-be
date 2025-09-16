import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('recipes')
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    unit: string;

    @Column()
    unitAmount: number;

    @Column('decimal')
    price: number;

    
}

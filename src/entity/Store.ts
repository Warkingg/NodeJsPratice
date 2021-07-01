import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    storeId: String;

    @Column()
    storeAddress: String;
}
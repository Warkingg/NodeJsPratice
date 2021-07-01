import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from "typeorm";
import { Item } from "./Item";


@Entity()
export class ShoppingCart {
    @PrimaryGeneratedColumn()
    cartId: number;

    @Column()
    dateCreated: Date;

    @Column()
    dateModified: Date;

    @OneToMany(() => Item, item => item.shoppingCart)
    items: Item[];
}
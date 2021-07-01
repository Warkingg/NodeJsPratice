import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { ShoppingCart } from "./ShoppingCart";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    itemId: number;

    @Column()
    displayName: string;

    @Column()
    itemType: string;

    @Column()
    price: number;

    @ManyToOne(() => ShoppingCart, shoppingCart => shoppingCart.items)
    shoppingCart: ShoppingCart;
    
}
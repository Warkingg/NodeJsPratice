import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { Customer } from "./Customer";
import { ShoppingCart } from "./ShoppingCart";
import { Store } from "./Store";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId: string;

    @OneToOne(() => Store)
    @JoinColumn()
    storeDetails: Store;

    @OneToOne(()=> ShoppingCart)
    @JoinColumn()
    cart: ShoppingCart;

    @OneToOne(()=> Customer)
    @JoinColumn()
    customerDetails: Customer;

}
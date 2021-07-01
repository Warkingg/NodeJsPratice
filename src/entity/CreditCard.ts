import {
    Entity,
    PrimaryColumn,
    Column,
    Unique,

    OneToOne
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { Customer } from "./Customer";

@Entity()
@Unique(["cardNumber"])
export class CreditCard {
    
    @PrimaryColumn()
    cardNumber: number;

    @Column()
    name: string;

    @Column()
    cardType: string;

    @Column()
    expiryDate: Date;

    @Column()
    CVV: number;

    @OneToOne(() => Customer)
    customer: Customer;

}
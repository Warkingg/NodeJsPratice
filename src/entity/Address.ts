import {
    Entity,
    PrimaryColumn,
    Column,
    Unique
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

enum AddressTypeEnum {
    billingAddress = "BILLINGADDRESS",
    shippingAddress = "SHIPPINGADDRESS"
}

@Entity()
@Unique(["type"])
export class Address {
    @PrimaryColumn()
    @IsNotEmpty()
    type: AddressTypeEnum;

    @Column()
    line1: string;

    @Column()
    line2: string;

    @Column()
    expiryDate: Date;

    @Column()
    @IsNotEmpty()
    CVV: number;

}
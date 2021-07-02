import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  Unique,
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { CreditCard } from "./CreditCard";
import { Address } from "./Address";

@Entity()
@Unique(["customerId"])
export class Customer {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column({nullable: true})
  @Length(4, 10)
  firstName: string;

  @Column()
  @Length(4, 10)
  lastName: string;

  @Column()
  @Length(3)
  age: number;

  @Column()
  sex: string;

  @OneToOne(() => Address)
  @JoinColumn()
  billingAddress: Address;

  @OneToOne(() => Address)
  @JoinColumn()
  shippingAddress: Address;


  @OneToOne(() => CreditCard)
  @JoinColumn()
  creditCard: CreditCard;
}
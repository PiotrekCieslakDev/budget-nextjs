import {User} from "@/domain/User";
import {v4 as uuidv4} from "uuid";
import {Account} from "@/domain/Account";

export enum TransactionType {
    Income = "INCOME",
    Expense = "EXPENSE",
}

export type TransactionProps = {
    id?: string;
    account: Account;
    date: Date;
    amount: number;
    from: string;
    description: string;
    isForSomeone: boolean;
    type: TransactionType;
}

export class Transaction {
    private readonly id: string;
    private readonly account: Account;
    private readonly date: Date;
    private amount: number;
    private from: string
    private description: string;
    private isForSomeone: boolean;
    private readonly type: TransactionType;


    constructor(props: TransactionProps) {
        this.id = props.id ?? uuidv4();
        this.account = props.account;
        this.date = props.date;
        this.amount = props.amount;
        this.from = props.from;
        this.description = props.description;
        this.isForSomeone = props.isForSomeone;
        this.type = props.type;
    }

    public static create(account: Account, date: Date, amount: number, from: string, description: string, isForSomeone: boolean, type: TransactionType) {
        return new Transaction({account, date, amount, from, description, type, isForSomeone});
    }

    public static of(id: string, account: Account, date: Date, amount: number, from: string, description: string, isForSomeone: boolean, type: TransactionType) {
        return new Transaction({id, account, date, amount, from, description, type, isForSomeone});
    }
}














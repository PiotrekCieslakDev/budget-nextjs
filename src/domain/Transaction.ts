import {v4 as uuidv4} from "uuid";

export enum TransactionType {
    Income = "INCOME",
    Expense = "EXPENSE",
}

export type TransactionProps = {
    id?: string;
    accountId: string;
    date: Date;
    amount: number;
    from: string;
    description: string;
    isForSomeone: boolean;
    type: TransactionType;
}

export class Transaction {
    private readonly id: string;
    private readonly accountId: string;
    private readonly date: Date;
    private amount: number;
    private from: string
    private description: string;
    private isForSomeone: boolean;
    private readonly type: TransactionType;


    constructor(props: TransactionProps) {
        this.id = props.id ?? uuidv4();
        this.accountId = props.accountId;
        this.date = props.date;
        this.amount = props.amount;
        this.from = props.from;
        this.description = props.description;
        this.isForSomeone = props.isForSomeone;
        this.type = props.type;
    }

    public static create(accountId: string, date: Date, amount: number, from: string, description: string, isForSomeone: boolean, type: TransactionType) {
        return new Transaction({accountId, date, amount, from, description, type, isForSomeone});
    }

    public static of(id: string, accountId: string, date: Date, amount: number, from: string, description: string, isForSomeone: boolean, type: TransactionType) {
        return new Transaction({id, accountId, date, amount, from, description, type, isForSomeone});
    }
}
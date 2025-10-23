import {User} from "@/domain/User";
import {v4 as uuidv4} from "uuid";

export enum AccountType {
    Checking = 'CHECKING', // Konto bieżące (bankowe)
    Savings = 'SAVINGS',   // Oszczędnościowe
    Cash = 'CASH',         // Gotówka
    CreditCard = 'CREDIT_CARD', // Karta kredytowa
    Investment = 'INVESTMENT', // Inwestycje
}

export type AccountProps = {
    id?: string;
    userId: string;
    name: string;
    type: AccountType;
}

export class Account {
    private readonly id: string;
    private readonly userId: string;
    private name: string;
    private type: AccountType;
    // Saldo/balans często nie jest trzymane bezpośrednio w obiekcie,
    // ale obliczane na podstawie sumy transakcji dla tego konta.
    // balance: number;


    constructor(props: AccountProps) {
        this.id = props.id ?? uuidv4();
        this.userId = props.userId;
        this.name = props.name;
        this.type = props.type;
    }

    public static create(userId: string, name: string, type: AccountType) {
        return new Account({userId, name, type});
    }

    public static of(id: string, userId: string, name: string, type: AccountType) {
        return new Account({id, userId, name, type});
    }
}
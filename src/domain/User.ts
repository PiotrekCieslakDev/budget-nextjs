import { v4 as uuidv4 } from 'uuid';

export type UserProps = {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
}

export class User {
    private readonly id: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private phone: string;
    private password: string;

    constructor(props: UserProps) {
        this.id = props.id ?? uuidv4();
        this.firstname = props.firstname;
        this.lastname = props.lastname;
        this.email = props.email;
        this.phone = props.phone;
        this.password = props.password;
    }

    public static create(firstname: string, lastname: string, email: string, phone: string, password: string) {
        return new User({firstname, lastname, email, phone, password});
    }

    public static of(id: string, firstname: string, lastname: string, email: string, phone: string, password: string) {
        return new User({id, firstname, lastname, email, phone, password});
    }
}
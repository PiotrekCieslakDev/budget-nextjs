import { v4 as uuidv4 } from "uuid";

export type CategoryProps = {
    id?: string;
    name: string;
    description?: string;
    ownerId?: string;
}

export class Category {
    private readonly id: string;
    private name: string;
    private description: string;
    private ownerId: string | null;

    constructor(props: CategoryProps) {
        this.id = props.id ?? uuidv4();
        this.name = props.name;
        this.description = props.description ?? "No description";
        this.ownerId = props.ownerId ?? null;
    }

    public static create(name: string, description?: string): Category {
        return new Category({name, description});
    }

    public static of(id: string, name: string, description?: string): Category {
        return new Category({id, name, description});
    }
}
import { Category, CategoryProps } from "./Category";

/**
 * Definiujemy typ Props dla Subcategory.
 * Rozszerza on CategoryProps (ma wszystko co Kategoria: id, name, description)
 * i dodaje nową, wymaganą właściwość: 'parent'.
 */
export type SubcategoryProps = CategoryProps & {
    parent: Category;
};

export class Subcategory extends Category {

    // Pole specyficzne tylko dla podkategorii
    private readonly parent: Category;

    /**
     * Konstruktor Subcategory musi przyjąć SubcategoryProps.
     */
    constructor(props: SubcategoryProps) {
        // 1. Wywołujemy konstruktor rodzica (Category)
        //    przekazując mu obiekt 'props'.
        //    Klasa Category sama wyciągnie sobie 'id', 'name' i 'description'.
        super(props);

        // 2. Ustawiamy nowe pole, które należy tylko do Subcategory.
        this.parent = props.parent;
    }

    /**
     * (Zalecane) Zaktualizowane metody fabryczne,
     * aby pasowały do nowego wymagania (parent).
     */
    public static createWithParent(name: string, parent: Category, description?: string): Subcategory {
        return new Subcategory({ name, description, parent });
    }

    public static ofWithParent(id: string, name: string, parent: Category, description?: string): Subcategory {
        return new Subcategory({ id, name, description, parent });
    }

    /**
     * (Opcjonalnie) Getter do pobierania rodzica.
     */
    public getParent(): Category {
        return this.parent;
    }
}
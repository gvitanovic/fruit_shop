export interface Product {
    id: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    packageSize: number;
    colors: ProductColor[];
    description: string;
    image: string;
}

export type ProductColor = 'green' | 'orange' | 'yellow';

export type SortOrder =
    | 'name-asc'
    | 'name-desc'
    | 'price-asc'
    | 'price-desc'
    | 'discount-desc';

export interface ProductFilters {
    colors: ProductColor[];
    searchQuery?: string;
    sortOrder: SortOrder;
}

export interface CartItem {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
    image: string;
    packageSize: number;
}

export interface Cart {
    items: CartItem[];
    totalPrice: number;
    totalItems: number;
}

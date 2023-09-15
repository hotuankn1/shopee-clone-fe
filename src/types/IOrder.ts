export interface IOrderProduct {
    productId: number;
    amount: number
}


export interface IOrder {
    id: string;
    purchasedDate?: string;
    status: 'pending' | "completed";
    orderProducts: IOrderProduct[]
}
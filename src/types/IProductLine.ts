import { IProduct } from "./IProduct";

export interface IProductLine{
    series: number[];
    colors: string[] ;
    products: IProduct[]
}
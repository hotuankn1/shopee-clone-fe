import axios from "axios";
import { IPagination } from "../types/IPagination";
import { IProduct } from "../types/IProduct";
import { IProductLine } from "../types/IProductLine";

export class ProductLineController {
    getList = (page: number, pageSize: number, search?: string, categoryId?: number): Promise<IPagination<IProductLine>> => {
        return axios.get(`http://localhost:3005/product/lines?page=${page}&pageSize=${pageSize}&search=${search}&categoryId=${categoryId}`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.error("Error:", error);
            throw error; 
        });
    }

    caculateAmount = (color: string, productLine: IProductLine) => {
        if (productLine.colors.includes(color)) {
            const productWithColor: IProduct | undefined = productLine.products.find(product => product.color === color);
            if (productWithColor) {
                return productWithColor.inventoryAmount;
            }
        }
        return 0;
    }

}

export const productLineController = new ProductLineController()
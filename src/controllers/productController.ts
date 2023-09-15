import axios from "axios";
import { IProduct } from "../types/IProduct"


export class ProductController {
    getList = () : Promise<IProduct[]> => {
        return axios.get(`http://localhost:3005/product/`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.error("Error:", error);
            throw error; 
        }); 
    }
}

export const productController = new ProductController
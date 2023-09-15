import axios from "axios";
import { ICategory } from "../types/ICategory";

export class CategoryController {
    getList = () : Promise<ICategory[]> => {
        return axios.get(`http://localhost:3005/category`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.error("Error:", error);
            throw error; 
        });
    } 
}

export const categoryController = new CategoryController();
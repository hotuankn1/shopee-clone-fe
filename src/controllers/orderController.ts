import axios from "axios";
import { IOrder } from "../types/IOrder";
import { IProductLine } from "../types/IProductLine";

export class OrderController {
    getListCarts = async () : Promise<IOrder[]> => {
        let carts : IOrder[] 
        carts = await axios.get('http://localhost:3000/orders')
        .then(response => {
            return response.data
            })
        .catch ((error) => {
            console.error("Error:", error);
            throw error; 
        })
        return carts
    }

    addItem = (color: string, productline: IProductLine) : Promise<IOrder> => {
        let cartItems= this.getListCarts()
        if (!cartItems) {
            axios.post('http://localhost:3005/createOrder/')
            cartItems = this.getListCarts()
        }

        return axios.post('http://localhost:3005/order/', {

        })
    }
}

export const orderController = new OrderController();
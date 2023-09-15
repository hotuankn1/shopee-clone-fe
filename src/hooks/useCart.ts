
import { stringify } from "querystring";
import React, { createContext, useContext, useEffect, useState } from "react";
import { orderController } from "../controllers/orderController";
import { IOrder } from "../types/IOrder";
import { IProductLine } from "../types/IProductLine";


export default function UseCart() {
    const [cartItems, setCartItems] = useState<IOrder>()

    // useEffect(() => {
    //     orderController.getCartItems().then(res => {
    //         setCartItems(res.data)
    //     })
    // }, [])

   
    // function updateCartItems(change: "increase" | "decrease", productId: number) {
    //     const updatedCartItems = orderController.update(change, productId)
    //     setCartItems(updatedCartI tems)
    //     return updatedCartItems
    // }

    // function addCartItems (color: string, productLine: IProductLine) {
    //     const updatedCartItems= orderController.add(color, productLine)
    //     setCartItems(updatedCartItems)
    //     return updatedCartItems
    // }

    // function deleteCartItems (productId:number) {
    //     const updatedCartItems = orderController.delete(productId)
    //     setCartItems(updatedCartItems)
    //     return updatedCartItems
    // }


    return {
        // cartItems,
        // updateCartItems,
        // addCartItems,
        // deleteCartItems
    }
}


export const CartContext = React.createContext<
  ReturnType<typeof UseCart>
>({} as any);



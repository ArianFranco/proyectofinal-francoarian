import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const newProduct = {
            name: item.title,
            price: item.price,
            quantity: quantity,
            category: item,category,
        }
        setCart ([...cart, newProduct]);
}
return (
    <CartContext.Provider value={{cart, addItem}}>
        {children}
    </CartContext.Provider>
)
}
export default CartProvider;
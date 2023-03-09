import { cartContext } from "./cartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const newProduct = {
            name: item.title,
            price: item.price,
            quantity: quantity,
            category: item.category,
        }
        setCart ([...cart, newProduct]);
}
return (
    <cartContext.Provider value={{cart, addItem}}>
        {children}
    </cartContext.Provider>
)
}
export default CartProvider;
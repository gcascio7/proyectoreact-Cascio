import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) =>{
        let found = cartList.find(productos => productos.id === item.id)
        if (found === undefined){
        setCartList([
            ... cartList,
            {
                id: item.id,
                name: item.name,
                price: item.cost,
                imageURL: item.image,
                qtyItem: qty
            }
        ])
    } else {
            found.qtyItem += qty
        }
    }

    const deleteCart = () =>{
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList, deleteCart, addToCart}}>
            {children}
        </CartContext.Provider>       

    )
}

export default CartContextProvider

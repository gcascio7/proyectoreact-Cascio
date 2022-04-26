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

    const borrarItem = (id) => {
        let result = cartList.filter(item=>item.id !=id)
        setCartList(result)
    }

    const calcTotalItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].qtyItem;
    }
    
    const calcTotal = () => {
        let total = cartList.map(item => calcTotalItem(item.id));
        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, calcTotal, calcItemsQty, deleteCart, addToCart, borrarItem, calcTotalItem}}>
            {children}
        </CartContext.Provider>       

    )
}

export default CartContextProvider

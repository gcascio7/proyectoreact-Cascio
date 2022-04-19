import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div>
            <h1>YOUR CART</h1> 
            <button onClick={test.deleteCart}>Eliminar Todo</button>
            {
            test.cartList.length > 0 && (
                test.cartList.map(item=>
                <div>              
                    <img src={item.imageURL} />
                    <span>
                        {item.name}
                    </span>
                    <div> {item.qtyItem} Item/s </div>
                    <div> {item.price} c/u</div> 
                </div>
                )
             )
                        } 
        </div>  
    
    );
}

export default Cart;
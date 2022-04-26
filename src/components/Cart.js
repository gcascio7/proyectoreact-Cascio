import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div >
            <h1>YOUR CART</h1> 
                     
            {
            test.cartList.length > 0 && (
                test.cartList.map(item=>
                <div className='cart'>              
                    <img src={item.imageURL} />
                    <div className='descripcion'> 
                        <h2> {item.name} </h2>
                        <div> {item.qtyItem} Item/s </div>
                        <div> $ {item.price} c/u</div> 
                        <div> $ {test.calcTotalItem(item.id)} Total </div>
                    </div>
                    <button onClick= {()=> test.borrarItem(item.id)}>Borrar Item/s</button>      
                 </div>      
                )
                
             )
                        } 
            
            {
                    (test.cartList.length > 0)
                    ?  <button onClick={test.deleteCart}>Eliminar Todo</button>
                    : <p>Carrito Vacio</p>
            }

            {
                test.cartList.length > 0 &&(   
                    <div>
                          <div> TOTAL CARRITO = $ {test.calcTotal()}</div>
                          <button> TERMINAR MI COMPRA </button> 
                    </div>
                )
            }


        </div>  
    
    );
}

export default Cart;
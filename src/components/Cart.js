import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const checkout = () =>{
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });

        let order ={
            buyer:{
                name: "Gian",
                mail: "gian@franco",
                phone:"223332223"
            },
            date: serverTimestamp(),
            items: test.cartList.map(item =>({
                id: item.idItem,
                title: item.name,
                price: item.price,
                qty: item.qtyItem,
            })),
            total: test.calcTotal()

        }
        const createOrder = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef
        }
        createOrder()
        .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err))
    }

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
                        <div> $ {test.calcTotalItem(item.idItem)} Total </div>
                    </div>
                    <button onClick= {()=> test.borrarItem(item.idItem)}>Borrar Item/s</button>      
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
                          <button onClick={checkout}> TERMINAR MI COMPRA </button> 
                    </div>
                )
            }


        </div>  
    
    );
}

export default Cart;
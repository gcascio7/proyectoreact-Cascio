import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
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

        test.deleteCart()
    }

    return (
        <div >
            <h1>YOUR CART</h1> 
              <div className='carrito'>    
            {
            test.cartList.length > 0 && (
                test.cartList.map(item=>
                <div className='cart'>              
                    <img src={item.imageURL}  alt=""/>
                    <div className='descripcion'> 
                    <Link to={`/detail/${item.idItem}`}><h2 className='a'> {item.name} </h2></Link>
                        <div> {item.qtyItem} Item/s </div>
                        <div> $ {item.price} c/u</div> 
                        <div> $ {test.calcTotalItem(item.idItem)} Total </div>
                    </div>
                    <button onClick= {()=> test.borrarItem(item.idItem)}>Borrar Item/s</button>      
                 </div>      
                )
                
             )
                        } 
            </div>   
            {
                    (test.cartList.length > 0)
                    ?  <button className='btn btn-danger' onClick={test.deleteCart}>Eliminar Todo</button>
                    : <p>Carrito Vacio</p>
            }

            {
                test.cartList.length > 0 &&(   
                    <div>
                          <div> TOTAL CARRITO = $ {test.calcTotal()}</div>
                          <button className='btn btn-success' onClick={checkout}> TERMINAR MI COMPRA </button> 
                    </div>
                )
            }

            
        </div>  
    
    );
}

export default Cart;
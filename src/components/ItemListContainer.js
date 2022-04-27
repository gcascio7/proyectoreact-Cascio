import { useEffect, useState } from "react"
import ItemList from "./itemList";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig'

const ItemListContainer = () => {

    const {idCategory} = useParams();

    const [datos, setDatos] = useState ([])
       
      useEffect (()=>{
        const fetchFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()  
        }));
        return dataFromFirestore
      }
      fetchFromFirestore()
          .then(result => setDatos(result))
          .catch(err => console.log(err))
    },[idCategory])
   




    return (
      <>
        <ItemList items={datos} />
        </>
    )
    }
    
    export default ItemListContainer;

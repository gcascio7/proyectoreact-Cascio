import { useEffect, useState } from "react"
import ItemList from "./itemList";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import db from '../utils/firebaseConfig'

const ItemListContainer = () => {

    const {idCategory} = useParams();

    const [datos, setDatos] = useState ([])
       
      useEffect (()=>{
        const fetchFromFirestore = async (idCategory) => {
          let q;
          if (idCategory) {
              q = query(collection(db, "products"), where('category', '==', idCategory));
          } else {
              q = query(collection(db, "products"));
          }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
          id: document.id,
          ...document.data()  
        }));
        return dataFromFirestore
      }
      fetchFromFirestore(idCategory)
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

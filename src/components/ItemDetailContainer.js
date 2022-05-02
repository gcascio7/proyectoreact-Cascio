import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig'


const ItemDetailContainer=()=>{

    const {idItem} = useParams();

    const [dato, setDato] = useState ({})
   
    const firestoreOne = async (idItem) => {
        const docRef = doc(db, "products", idItem);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return {
                id: idItem,
                ...docSnap.data()
            }
            } else {
          console.log("No such document!");
        }
    }

    useEffect (()=>{
      
        firestoreOne(idItem)
          .then(result => setDato(result))
          .catch(err => console.log(err))
    },[idItem]);
   
  
    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer



import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig'


const ItemDetailContainer=()=>{

    const {id} = useParams();

    const [dato, setDato] = useState ({})
   
    const firestoreOne = async (id) => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return {
                id: id,
                ...docSnap.data()
            }
            } else {
          console.log("No such document!");
        }
    }

    useEffect (()=>{
      
        firestoreOne(id)
          .then(result => setDato(result))
          .catch(err => console.log(err))
    },[]);
   
  
    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer



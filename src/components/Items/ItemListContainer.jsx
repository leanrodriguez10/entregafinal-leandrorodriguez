import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../Hooks/useFetch';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
 

   useEffect( () => {
      const db = getFirestore()

      const itemCollection = collection(db, "items");

      const q = query(itemCollection, where("price", ">", 10000))
      getDocs(itemCollection)
          .then(snapshot => {
          const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}))
          setItems(allData)
          })

   }, [])

  return (
    <Container>
        <Row>
            {
             
              <ItemList items={items} />
            }
            
        </Row>
    </Container>
  )
}

export default ItemListContainer
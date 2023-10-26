import React from 'react';
import CartDetail from '../components/Cart/CartDetail';
import {addDoc, collection, getFirestore } from "firebase/firestore"
import CartContextProvider from '../context/cartContext/CartContextProvider';
import ItemList from '../components/Items/ItemList';
import ItemListContainer from '../components/Items/ItemListContainer';


const Cart = () => {
 
  return (
    
    <>
    <CartContextProvider />
    <CartDetail />
  
    </>
  )
}

export default Cart
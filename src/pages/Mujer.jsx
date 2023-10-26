import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from '/src/components/Items/ItemList';
import useFetch from '/src/components/Hooks/useFetch';
import ItemListContainer from '../components/Items/ItemListContainer';


const Mujer = () => {
  //const [items] = useFetch(`https://fakestoreapi.com/products/category/women's clothing`)

   console.log(items)
    
  return (
    <Container>
        <Row>
            {
              items !== null &&
              <ItemList items={items} />
            }
            
        </Row>
    </Container>
  )
  
  
}
export default Mujer
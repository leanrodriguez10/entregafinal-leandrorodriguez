import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <>
    {
      items.map((item) => (
        <Col md={3} lg={3} xs={12} key={item.id}>
          <CardList item={item}/>

        </Col>
      ))
    }
    </>
  )
}
// OTRO COMPONENTE
const CardList = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Img variant="top" src={item.image} style={{ height: '30%'}} />
      <img src="https://i.postimg.cc/xdR1ygZG/https://i.postimg.cc/3wcrkzG6/iphone14pro.jpg.jpg" alt="" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Stock: {item.stock}
        </Card.Text>
        <Card.Text>
          Price: {item.price}
        </Card.Text>
        
        <Link to={`/detalle/${item.id}`}>
        <Button variant="primary">Ver Detalle</Button>
        </Link>
        
      </Card.Body>
      <Counter />
    </Card>
  );
}
export default ItemList
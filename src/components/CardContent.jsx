import React from 'react';
import { Cards} from '../components/Card';
import { Card, Button } from 'react-bootstrap';
import {product} from '../helpers/Api';

export const CardContent = ({onProductClick} ) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
      {product.map((product) => (
      <Card style={{ width: '18rem', margin: '60px', backgroundColor: '#e1e6e9' }} key={product.id}>
        <Card.Img style={{marginTop: '10px' }} variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Button style={{ backgroundColor: '#04645c'}} variant="primary" onClick={() => onProductClick(product)}>
            Ver detalle
          </Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

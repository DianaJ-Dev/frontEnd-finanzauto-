import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Cards = ({id,img,title}) => {

  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={handleViewDetail}>Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}



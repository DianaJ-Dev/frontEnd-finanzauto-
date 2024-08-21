import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardDetail = ({ showModal, handleCloseModal, selectedProduct }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const url = `https://backend-finanzauto.onrender.com/summary/${selectedProduct.title}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedProduct?.title) {
      setData(null)
      fetchData();
    }
  }, [selectedProduct]);


  return (
    <Modal show={showModal} onHide={handleCloseModal}  >
      <Modal.Header closeButton style={{ backgroundColor: '#e1e6e9' }}>
        <Modal.Title>{selectedProduct?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedProduct?.img && (
          <img 
            src={selectedProduct.img} 
            alt={selectedProduct.title} 
            style={{ width: '100%', height: 'auto' }} 
          />
        )}
        <Card.Title>Resumen</Card.Title>
        <Card.Text>
        {console.log(data)}
          {data ? (
          <>
              <p>La valoración es {data.rating}</p>
              <p>Lo mejor: {data.summaryBest}</p>
              <p>Lo peor: {data.summaryWorst}</p>
          </>
          ) : (
          <p>Cargando...</p> 
          )}
        </Card.Text>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#e1e6e9' }}>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbars } from './components/Start.jsx';
import { Carrusel } from './components/Carrusel.jsx';
import { CardContent } from './components/CardContent.jsx';
import { CardDetail } from './components/CardDetail.jsx';
import { Footer } from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


import './index.css'

function App() {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetail = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <BrowserRouter>
      <>
        <Navbars/>
        <Carrusel/>
        <Routes>
          <Route path="/" element={< CardContent onProductClick={handleShowDetail} />} /> 
        </Routes> 
        <Footer/>
        <CardDetail
        showModal={showModal} 
        handleCloseModal={handleCloseModal} 
        selectedProduct={selectedProduct}
        
        />
      </>  
    </BrowserRouter>
    
  )
}

export default App


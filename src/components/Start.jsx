import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgFinanzauto from '../photo/Finanzauto.png'

export const Navbars = () => {
  return (
    <>
      <Navbar>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home" className="mx-auto">
            <img
              src={imgFinanzauto}
              alt="Finanzauto"
              style={{ width: '150px', height: '50px' }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

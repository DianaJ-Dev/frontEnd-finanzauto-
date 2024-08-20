import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <div className="container-fluid">
      <div className="row p-4 pb-3 text-white container-fluid" style={{ backgroundColor: '#04645c', width:'102%', marginBlock:'-8px',  }}>
          <div className="col-xs-12 pt-4">
            <p className="text-white text-center">Copyright - All rights reserved © 2024</p>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
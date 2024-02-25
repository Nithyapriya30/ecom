import React from 'react'
import ProductCardCollection from '../components/NewCollections/NewCollection';
import MyNavbarr from '../components/navbar/Navbarr';
import { Container } from 'react-bootstrap';

function CollectionProduct() {
  return (
    <div>
      <MyNavbarr />
      <Container className="my-5 mt-4">
        <div style={{ paddingTop: "50px" }}>
        <ProductCardCollection />
      </div>
      </Container>
    </div>
  );
}

export default CollectionProduct
import React from 'react';
import CreditCardForm from '../components/CreditCardForm';
import MyNavbar from '../components/navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import { Container } from 'react-bootstrap';
const PaymentPage = () => {
  return (
    <div>
      <MyNavbar />
      <Container className='my-5 mt-3'>
        <CreditCardForm />
      </Container>
      <Footer />
    </div>
  );
};

export default PaymentPage;

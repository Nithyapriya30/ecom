import React, { useState } from 'react';
import { Navbar, Container, Nav, Card, Table, Image } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import shirt4 from '../Assets/images/shirt4.png';
import { Link } from 'react-router-dom';
function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'COAT', price: 150, quantity: 0 },
    { id: 2, name: 'SHIRT', price: 200, quantity: 0 },
  ]);

  function updateCartItem(index, quantityChange) {
    setCartItems(function (prevItems) {
      const newItems = [...prevItems];
      const newQuantity = newItems[index].quantity + quantityChange;
      newItems[index].quantity = Math.max(0, newQuantity);
      return newItems;
    });
  }

  function updateCartTotal() {
    let totalAmount = 0;
    let totalQuantity = 0;

    cartItems.forEach(function (item) {
      totalAmount += item.price * item.quantity;
      totalQuantity += item.quantity;
    });

    return { totalAmount, totalQuantity };
  }

  const { totalAmount, totalQuantity } = updateCartTotal();

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" className="p-3 mt-5">
        <Container fluid>
          <Navbar.Brand href="/" as={Link} to ="/">Home</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <span className="navbar-text">
            Total Shopping Value: &#8377;<span className="TotalAmount">{totalAmount.toFixed(2)}</span>
          </span>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Card className="mx-auto shadow-lg rounded-3" style={{ width: '70%' }}>
          <Card.Header>Cart</Card.Header>
          <Card.Body>
            <Table className="table table-secondary" responsive>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th className="text-center">Quantity</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {cartItems.map(function (item, index) {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <Image src={shirt4} alt={item.name}style={{ maxWidth: "50%", maxHeight: "60%", width: "auto", height: "auto" }} />
                        {item.name}
                      </td>
                      <td>
                        &#8377;<span className="txtPrice">{item.price}</span>
                      </td>
                      <td className="text-center">
                        <i className="fas fa-minus-circle" onClick={() => updateCartItem(index, -1)}></i>&nbsp;
                        <input
                          name="item"
                          value={item.quantity}
                          size="2"
                          onChange={function (e) {
                           updateCartItem(index, parseInt(e.target.value, 10) || 0);

                          }}
                        />
                        &nbsp;
                        <i className="fas fa-plus-circle" onClick={() => updateCartItem(index, 1)}></i>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="2" className="text-end">
                    Total Amount:
                  </td>
                  <td>&#8377;<span className="TotalAmount">{totalAmount.toFixed(2)}</span></td>
                  <td>Total Quantity: <span className="totalQuantity">{totalQuantity}</span></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ShoppingCart;

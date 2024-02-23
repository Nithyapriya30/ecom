const React = require("react");
const {
  Container,
  Row,
  Col,
  Table,
  Collapse,
  Card,
  Button,
} = require("react-bootstrap");

function YourOrder() {
  return (
    <Container>
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="h3 mb-3 text-black">Your Order</h2>
          <div className="p-3 p-lg-5 border">
            <Table className="site-block-order-table mb-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Top Up T-Shirt <strong className="mx-2">x</strong> 1
                  </td>
                  <td>$250.00</td>
                </tr>
                <tr>
                  <td>
                    Polo Shirt <strong className="mx-2">x</strong> 1
                  </td>
                  <td>$100.00</td>
                </tr>
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Cart Subtotal</strong>
                  </td>
                  <td className="text-black">$350.00</td>
                </tr>
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Order Total</strong>
                  </td>
                  <td className="text-black font-weight-bold">
                    <strong>$350.00</strong>
                  </td>
                </tr>
              </tbody>
            </Table>

            <p>Online payments</p>

            <Card border="primary" className="mb-3">
              <Card.Header>
                <h3 className="h6 mb-0">
                  <Button
                    variant="link"
                    data-toggle="collapse"
                    href="#collapsebank"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsebank"
                  >
                    Direct Bank Transfer
                  </Button>
                  <Button
                    variant="link"
                    data-toggle="collapse"
                    href="#collapsebank"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsebank"
                  >
                    Net banking
                  </Button>
                
                  <Button
                    variant="link"
                    data-toggle="collapse"
                    href="#collapsebank"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsebank"
                  >
                   Cash on Delivery
                  </Button>
                </h3>
              </Card.Header>
              <Collapse id="collapsebank">
                <Card.Body>
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </p>
                </Card.Body>
              </Collapse>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default YourOrder;


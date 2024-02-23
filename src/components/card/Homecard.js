import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';
function Homecard(props) {
  return (
    <Card className="mx-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.cateimg} />
      <Card.Body>
        <Card.Title>{props.category}</Card.Title>
        <Card.Text>{props.cardtext}</Card.Text>
        <Link to={props.route}>
          <Button variant="primary">{props.btnname}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Homecard;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BlogComp(props) {
  return (
    <Card
      style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      id="Blog"
    >
      <Card.Title className="text-center p-3">{props.title}</Card.Title>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.content}</Card.Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogComp;
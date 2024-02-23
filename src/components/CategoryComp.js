import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CategoryComp(props) {
  return (
    <Card style={{ width: '18rem' }}>
     <Card.Title className='text-center p-3'>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>
          {props.content}
        </Card.Text>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Button variant="primary">Shop More</Button></div>     
      </Card.Body>
    </Card>
  );
}
export default CategoryComp;
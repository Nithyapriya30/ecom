import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CategoryComp from '../components/CategoryComp';
import shirt1 from '../Assets/images/shirt1.png'
import shirt2 from '../Assets/images/shirt2.png'
import shirt3 from '../Assets/images/shirt3.png'
import shirt4 from '../Assets/images/shirt4.png'
import shirt5 from '../Assets/images/shirt5.png'
import shirt6 from '../Assets/images/shirt6.png'
import pant1 from '../Assets/images/pant1.png'
import menshirt from '../Assets/images/menshirt.png'
function Category(){
    return(
        <div>
<h1 className='text-center mt-5 mb-5' style={{color:'green'}}>Category</h1>
        <Container className='mb-5'>
            <Row>
                <Col className='m-1'>
                <CategoryComp title="Shirt"  image={menshirt}/> 
                </Col>
                <Col className='m-1'>
                <CategoryComp title="PoloShirt"  image={shirt2}/> 
                </Col>
                <Col className='m-1'>
                <CategoryComp title="Shirt-HalfSleeve"  image={shirt3}/> 
                </Col>
                <Col className='m-1'>
                <CategoryComp title="TunicShirts"  image={shirt4}/> 
                </Col>  
            </Row>
             <Row>
                <Col className='m-1'>
                <CategoryComp title="UnderShirts"  image={shirt5}/> 
                </Col>
                <Col className='m-1'>
                <CategoryComp title="WesternWear"  image={shirt6}/> 
                </Col>
                <Col className='m-1'>
                <CategoryComp title="Jean"  image={pant1}/> 
                </Col>
                <Col className='m-1'>
                <CategoryComp title="Formal"  image={shirt1}/> 
                </Col>  
            </Row>
        </Container>
        </div>
    );
}
export default Category;
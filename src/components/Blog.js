import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogComp from './BlogComp';
import img1 from '../Assets/images/blog-1.jpg';
import img2 from '../Assets/images/blog-2.jpg';
import img3 from '../Assets/images/blog-3.jpg';
function Blog(){
    return(
        <div>
<h1 className='text-center mt-5 mb-5' style={{color:'black'}}>Blogs</h1>
        <Container className='mb-5' id="Blog">
            <Row>
                <Col className='m-1'>
                <BlogComp title="Blog News" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolores in nisi illum repudiandae voluptas nesciunt! Perferendis quod odio veniam, placeat saepe voluptatum cumque similique sint in corporis officiis dolor?" image={img1}/> 
                </Col>
                <Col className='m-1'>
                <BlogComp title="Blog News" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolores in nisi illum repudiandae voluptas nesciunt! Perferendis quod odio veniam, placeat saepe voluptatum cumque similique sint in corporis officiis dolor?" image={img2}/> 
                </Col>
                 <Col className='m-1'>
                <BlogComp title="Blog News" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolores in nisi illum repudiandae voluptas nesciunt! Perferendis quod odio veniam, placeat saepe voluptatum cumque similique sint in corporis officiis dolor?" image={img3}/> 
                </Col>
                 <Col className='m-1'>
                <BlogComp title="Blog News" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolores in nisi illum repudiandae voluptas nesciunt! Perferendis quod odio veniam, placeat saepe voluptatum cumque similique sint in corporis officiis dolor?" image={img1}/> 
                </Col>
            </Row>
        </Container>
        </div>
    );
}
export default Blog;

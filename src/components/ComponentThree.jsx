import React from 'react';
import {  Container, Row,Col,Card} from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

function ComponentThree() {
  const cardsData = [
    { title: 'Computer Engineering', content: ' Four Years full-time Programme in Bachelor of Engineering', image:'https://pvpittssm.edu.in/assets/img/csicon.png'},
    { title: '  Mechanical Engineering', content: 'Four Years full-time Programme in Bachelor of Engineering',image:'https://pvpittssm.edu.in/assets/img/mechicon.png' },
    { title: ' Civil Engineering', content: 'Four Years full-time Programme in Bachelor of Engineering',image:'https://pvpittssm.edu.in/assets/img/civilicon.png' },
    { title: ' E & TC Engineering', content: '  Four Years full-time Programme in Bachelor of Engineering, Bavdhan pune',image:'https://pvpittssm.edu.in/assets/img/etcicon.png' },
    { title: 'FE Engineering', content: 'In terms of subjects they are quite moderate and focuses on basic topics',image:'https://pvpittssm.edu.in/assets/img/feicon.png' },
    { title: 'Training & Placement', content: 'Training & Placement assistance guided by the specialized department',image:'	https://pvpittssm.edu.in/assets/img/tpicon.png' },
  ];

  function CustomCard({ title, content, image }) {
    return (
      <Card className="cardHover">
        <a href="#">
          <Card.Body className="d-flex align-items-center">
            <Card.Img
              src={image}
              alt="Card image"
              style={{ width: "150px", height: "100px" }}
            />
            <div >
              <Card.Title>{title}</Card.Title>
              <Card.Text>{content}</Card.Text>
              <FaArrowRight />
            </div>
          </Card.Body>
        </a>
      </Card>
    );
  }
  

  return (
    <Container fluid className='my-5'>
      <Row>
      <h1 className='text-center'>OUR PROGRAMMERS </h1>
        {cardsData.map((card, index) => (
          <Col md={4} key={index} className='my-3'>
            <CustomCard title={card.title} content={card.content} image={card.image}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ComponentThree;

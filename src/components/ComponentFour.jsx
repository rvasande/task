import React from "react";
import { Container, Image, Row, Card, Col } from "react-bootstrap";
import Gif from "../assets/images/student.gif";
// import CustomCard from './CustomCard';
const ComponentFour = () => {
  const cardsData = [
    {
      content: " Four Years full-time Programme in Bachelor of Engineering",
      image: "	https://pvpittssm.edu.in/admin/uploads/Achievement-62a44ebb28c7e8.97126822.jpg",
    },
    {
      content: " Four Years full-time Programme in Bachelor of Engineering",
      image: "	https://pvpittssm.edu.in/admin/uploads/Achievement-62a44ebb28c7e8.97126822.jpg",
    },
    {
      content: "Four Years full-time Programme in Bachelor of Engineering",
      image: "https://pvpittssm.edu.in/admin/uploads/Student_Achievement-62a45120a30b69.77511507.jpg",
    },
    {
      content: "Four Years full-time Programme in Bachelor of Engineering",
      image: "https://pvpittssm.edu.in/admin/uploads/Student_Achievement-62a45120a30b69.77511507.jpg",
    },
  ];

  function CustomCard({ title, content, image }) {
    return (
      <Card className="cardHover">
        <a href="#">
          <Card.Body>
            <Card.Img
            variant="top"
              src={image}
              alt="Card image"
            className="img-fluid" 
            />
            <div>
              <Card.Text>{content}</Card.Text>
            </div>
          </Card.Body>
        </a>
      </Card>
    );
  }

  return (
    <Container fluid className="my-5">
      <Row>
      <h1 className="text-center ">STUDENT'S ACHIEVEMENTS</h1>
        <Col md={5} lg={5} className="d-flex  align-items-center">
          <Image src={Gif} alt="GIF Image" fluid />
        </Col>

        <Col md={7} lg={7}>
          <Row>
            {cardsData.map((card, index) => (
              <Col md={6} lg={6} key={index} className="my-3">
                <CustomCard
                  content={card.content}
                  image={card.image}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ComponentFour;

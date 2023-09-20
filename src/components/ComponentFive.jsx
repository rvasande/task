import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Card } from "react-bootstrap";

const cards = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum.'  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum.'  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum.'  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum.'  },
  {
    id: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum.'  },
  {
    id: 6,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum.'  },
];

const ComponentFive = () => {
  const groupedCards = cards.reduce((acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    return acc;
  }, []);

  return (
  <Container className='py-5' >
  <h1 className='text-center'>HEAR FROM OUR ALUMNI</h1>
      <Carousel>
      {groupedCards.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-evenly " id='vertical'>
            {item.map((item, index) => (
              <Card key={index} style={{ width: '18rem', marginTop:'30px' }}>
                <Card.Body>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  );
};

export default ComponentFive;

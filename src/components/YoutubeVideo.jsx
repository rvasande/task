import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from "react-player";
import React, { useRef } from "react";
function VideoPlayer() {

    const videoUrls = [
        'https://youtu.be/YsLJVzE-6t4',
        'https://youtu.be/Fk7b9dgtJNc',
        'https://youtu.be/8XyIlu26cQA',
        'https://youtu.be/NNeHIxEsHtA',
        'https://youtu.be/fXaCfemuRRE',
        'https://youtu.be/wQUWGmMJzWo',
      ];

  const playerRef = useRef(null);
  return (
    <Container>
    <Row>
    <h1 className='text-center'>STUDENT CORNER </h1>
      {videoUrls.map((url, index) => (
        <Col key={index} md={4} className='my-4 videoBorder'>
          <ReactPlayer
            url={url}
            width="100%"
            height="40vh"
            controls
          />
        </Col>
      ))}
    </Row>
  </Container>
  );
}
export default VideoPlayer;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoPlayer from "../components/VideoPlayer";
import Icons from "./Icons";

const ComponentOne = () => {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col lg={5}>
            <VideoPlayer />
          </Col>

          <Col lg={7}>
            <h2>
              <span style={{ color: "#d2332a" }}>PVPIT</span> BAVDHAN, PUNE
            </h2>
            <h5>
              PVPIT is governed by The Shetkari Shikshan Mandal, a charitable
              Trust registered under Bombay Public Trust Act 1950 and Societies
              Registration Act 1860. The TSSM started the Padmabhooshan
              Vasantdada Patil Institute of Technology in the academic year
              2006-07. The College is approved by All India Council for
              Technical Education (AICTE), New Delhi, recognized by Government
              of Maharashtra, Directorate of Technical Education (DTE) and
              affiliated to Savitribai Phule Pune University (SPPU).
            </h5>
          </Col>
        </Row>
      </Container>
      <Icons />
    </>
  );
};

export default ComponentOne;

import React from "react";
import {
  FaCalendar,
  FaCar,
  FaHome,
  FaHospital,
  FaPassport,
  FaPhone,
  FaWhatsappSquare,
  FaAccessibleIcon,
  FaRProject,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const Icons = () => {
  const icons = [
    <FaCalendar />,
    <FaCar />,
    <FaHome />,
    <FaHospital />,
    <FaPassport />,
    <FaPhone />,
  ];

  const newIcons = [
    <FaWhatsappSquare />,
    <FaAccessibleIcon />,
    <FaRProject />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaFacebook />,
  ];
  return (
    <Container>
      <div>
        <Row xs={3} sm={2} md={3} lg={4} xl={6}>
          {icons.map((icon, index) => (
            <Col key={index}>
              <div className="collegeIcons">
                <a href="#">{icon}</a>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="my-4">
        <Row xs={3} sm={2} md={3} lg={4} xl={6}>
          {newIcons.map((icon, index) => (
            <Col key={index}>
              <div className="collegeIcons">
                <a href="#">{icon}</a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Icons;

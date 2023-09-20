import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import SelectForm from '../components/SelectForm'

const EnquiryScreen = () => {
  return (
    <main>
      <Container>
        <Row className="text-center my-4">
          <Col md={6}>
            <h3>UG Course</h3>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>E & TC Engineering</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Computer Engineering </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Computer Sci & Engg. (Data Science)</td>
                  <td>80</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6}>
            <h3>PG Course</h3>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>E & TC Engineering</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Computer Engineering </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Computer Sci & Engg. (Data Science)</td>
                  <td>80</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="text-center">
          <h1>ADMISSION ENQUIRY</h1>
          <p>
            Padmabhooshan Vasantdada Patil Institute of Technology (PVPIT) is
            governed by The Shetkari Shikshan Mandal, a charitable Trust
            registered under Bombay Public Trust Act 1950 and Societies
            Registration Act 1860. The TSSM started the Padmabhooshan Vasantdada
            Patil Institute of Technology in the academic year 2006-07. The
            College is approved by All India Council for Technical Education
            (AICTE), New Delhi, recognized by Government of Maharashtra,
            Directorate of Technical Education (DTE) and affiliated to
            University of Pune. DTE Code: - EN 6122
          </p>

          <SelectForm />
        </Row>
      </Container>
    </main>
  );
};

export default EnquiryScreen;

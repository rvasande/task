import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function SelectForm() {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setShowForm(value !== "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with selected option:", selectedOption);
  };

  return (
    <Container className="my-4">
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Form>
            <Form.Group>
              <Form.Label>Select Course</Form.Label>
              <Form.Control as="select" onChange={handleSelectChange}>
                <option value="">Select Course</option>
                <option value="option1">First Year</option>
                <option value="option2">Direct Second Year</option>
                <option value="option3">Post Graduation</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {showForm && (
        <Row className="my-4">
          <Form onSubmit={handleSubmit} >
            <h4> Enquiry Form</h4>
            <Button
              variant="danger text-light"
              className="btn btn-sm"
              type="submit"
            >
              fees structure
            </Button>
            <Button
              variant="danger text-light"
              className="btn btn-sm mx-3"
              type="submit"
            >
              requirenment documents
            </Button>

            <Row className="my-4">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>full name</Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
              <Col md={4} >
                <Form.Group>
                  <Form.Label>mobile number</Form.Label>
                  <Form.Control type="number" placeholder="Enter something..." />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>email id</Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>CET marks </Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
              <Col md={4} >
                <Form.Group>
                  <Form.Label>JEE marks</Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>PCM marks</Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} >
                <Form.Group>
                  <Form.Label>state</Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>city</Form.Label>
                  <Form.Control type="text" placeholder="Enter something..." />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>percentage</Form.Label>
                  <Form.Control type="number" placeholder="Enter something..." />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="danger text-light"
              className="btn btn-lg my-4"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Row>
      )}
    </Container>
  );
}

export default SelectForm;

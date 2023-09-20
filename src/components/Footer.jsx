import React from "react";
import {  Row, Col, Card } from "react-bootstrap";
import FooterImg from "../assets/images/footer_logo.png";
import Naac from "../assets/images/naac.png";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Card className="text-dark  h-50">
        {/* <Card.Img src={College} alt="Card image" class="img-height" /> */}
        <Card.ImgOverlay>
          <Card.Body className="text-center">
            <Row>
              <Col md={5}>
                <Card.Img
                  src={FooterImg}
                  style={{ width: "140px", borderRadius: "50%" }}
                  className="mx-3"
                />
                <Card.Img src={Naac} style={{ width: "200px" }} />

                <Card.Text className="my-3">
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    dolorum.
                  </h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nisi, tempore quis alias molestiae ad minima nihil. Debitis
                    obcaecati quibusdam quia vero minima, omnis eaque provident
                    sint corrupti beatae suscipit rerum!
                  </p>

                  <div className="icons">
                    <a href="#">
                      <FaTwitterSquare size={40} />
                    </a>
                    <a href="#">
                      <FaYoutubeSquare size={40} />
                    </a>
                    <a href="#">
                      <FaFacebookSquare size={40} />
                    </a>
                    <a href="#">
                      <FaInstagramSquare size={40} />
                    </a>
                    <a href="#">
                      <FaWhatsappSquare size={40} />
                    </a>
                    <a href="#">
                      <FaGooglePlusSquare size={40} />
                    </a>
                  </div>
                </Card.Text>
              </Col>

              <Col md={7}>
                <Card.Text className="d-flex justify-content-evenly">
                  <div>
                    <h4>Quick Links</h4>
                    <ul className="list">
                      <a href="#">
                        <li>NAAC</li>
                      </a>
                      <a href="#">
                        <li>IQAC</li>
                      </a>
                      <a href="#">
                        <li>AICTE</li>
                      </a>
                      <a href="#">
                        <li>DTE</li>
                      </a>
                      <a href="#">
                        <li>NBA</li>
                      </a>
                      <a href="#">
                        <li>SPPU</li>
                      </a>
                      <a href="#">
                        <li>Grievance</li>
                      </a>
                      <a href="#">
                        <li>Cells</li>
                      </a>
                    </ul>
                  </div>
                  <div>
                    <h4>PVPIT Hub</h4>
                    <ul className="list ">
                      <a href="#">
                        <li>NAAC</li>
                      </a>
                      <a href="#">
                        <li>IQAC</li>
                      </a>
                      <a href="#">
                        <li>AICTE</li>
                      </a>
                      <a href="#">
                        <li>DTE</li>
                      </a>
                      <a href="#">
                        <li>NBA</li>
                      </a>
                      <a href="#">
                        <li>SPPU</li>
                      </a>
                      <a href="#">
                        <li>Grievance</li>
                      </a>
                      <a href="#">
                        <li>Cells</li>
                      </a>
                    </ul>
                  </div>
                </Card.Text>
              </Col>
            </Row>

            <Row className="my-4">
              <div className="d-flex justify-content-between">
                <span>© 2007 - 2023 PVPIT. All Rights Reserved</span>
                <span>Designed & Developed by <span style={{color:'#d2332a'}}>HSPM Solutions LLP</span>.</span>
              </div>
            </Row>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </footer>
  );
};

export default Footer;

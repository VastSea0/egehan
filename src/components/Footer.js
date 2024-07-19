import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 
  AiFillInstagram,
} from "react-icons/ai";
 
function Footer() {

 
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Hüma Egehan KAHRAMAN tarafından sevgi ile yapılmıştır.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
           
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/vastsea0"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
     
            <li className="social-icons">
              <a
                href="https://www.instagram.com/marsstakiuzayliyim"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

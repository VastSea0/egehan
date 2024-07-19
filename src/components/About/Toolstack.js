import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiLinux,
  SiMacos,
  SiNetlify,
  SiFirefoxbrowser
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirefoxbrowser />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-icons">
              <i className="fa fa-heart-o footer-icon"></i>
              <i className="fa fa-dot-circle-o footer-icon"></i>
              {/* <i className="fa fa-ring "></i> */}
              <i class="fa fa-bell-o footer-icon"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
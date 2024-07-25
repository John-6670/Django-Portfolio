import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {FaTelegram} from "react-icons/fa6";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Mohammadmatin Hazrati</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/john-6670"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/mohammadmatin-h-7b4209216/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://t.me/john_6670"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTelegram/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

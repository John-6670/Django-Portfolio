import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiSqlite, SiNumpy, SiPandas,
    SiHtml5, SiCss3, SiDjango,
    SiPython
} from "react-icons/si";
import { IoLogoJavascript  } from "react-icons/io";
import { FaReact, FaJava } from "react-icons/fa";

function TechStack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSqlite />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDjango />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNumpy />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPandas />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaJava />
            </Col>
        </Row>
    );
}

export default TechStack;

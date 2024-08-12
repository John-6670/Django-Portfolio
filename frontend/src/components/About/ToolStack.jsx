import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiPostman, SiGit, SiGithub,
    SiVisualstudiocode, SiIntellijidea,
    SiPycharm
} from "react-icons/si";

function ToolStack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={3} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={3} className="tech-icons">
                <SiGit />
            </Col>
            <Col xs={4} md={3} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={4} md={3} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={3} className="tech-icons">
                <SiPycharm />
            </Col>
            <Col xs={4} md={3} className="tech-icons">
                <SiIntellijidea />
            </Col>
        </Row>
    );
}

export default ToolStack;

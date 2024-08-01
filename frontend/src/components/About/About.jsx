import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import ToolStack from "./ToolStack";
import "../../Styles/About.css";
import CodingLottie from "../../Lottie";
import animationData from "../../lottie/coding.json";

function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="green">I AM</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{padding: "2em"}}
                        className="about-img"
                    >
                        <Col lg="6">
                            <CodingLottie animationData={animationData} height={530} width={550}/>
                        </Col>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    <strong className="green">Skill Set </strong>
                </h1>

                <TechStack />

                <h1 className="project-heading">
                    <strong className="green">Tools</strong> I use
                </h1>
                <ToolStack />
            </Container>
        </Container>
    );
}

export default About;

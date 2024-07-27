import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Summary from "./Summary";
import Typewriter from "typewriter-effect";
import "../../Styles/Home.css";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Mohammadmatin Hazrati</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Computer Engineering Student",
                                            "Junior Web Developer",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Summary />
        </section>
    );
}

export default Home;

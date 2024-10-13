import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="green">Mohammadmatin Hazrati</span>
                        , student of <span className="green"> Sharif University of Technology.</span>
                        <br />
                        I have a strong passion for backend development. Proficient in <span className="green">Python, Django, and REST framework</span>.
                        <br />
                        Seeking a challenging role to apply my skills and contribute to innovative
                        projects.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Video Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Watching Tech Videos
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import {Col} from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.technologies.map((tech) => (
          <Col xs={1} md={1}>
            {tech}
          </Col>
        ))}
        <Button variant="success" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import {Col, Row} from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.alt} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Subtitle style={{margin: '35px 0 10px 0', textAlign: 'left'}} className='green'>Technologies used:</Card.Subtitle>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          {props.technologies.map((tech) => (
            <Col xs={1} md={tech.name.length > 15 ? 5 : 1} className='tech-card'>
              {tech.name}
            </Col>
          ))}
        </Row>
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <Button variant="success" href={props.ghLink} target="_blank" style={{marginTop: '20px'}}>
          <BsGithub /> &nbsp;
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import hotel from "../../Assets/Projects/Hotel.png";
import drf from "../../Assets/Projects/DRF.jpg";
import "../../Styles/Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drf}
              title="Simple Social Media API"
              description="This is a Django REST API project under development that provides functionalities for users to interact
              with posts and comments. I'm working on improving the features and functionalities."
              ghLink="https://github.com/John-6670/SimpleSocialApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              title="Hotel Management System"
              description="The Hotel Management System is a comprehensive software solution designed to streamline the operations of hotels.
              This system facilitates the management of hotel activities including room booking, guest management, staff management, and report generation.
              It is built using Java and Maven, ensuring a robust and scalable application. "
              ghLink="https://github.com/John-6670/HotelManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drf}
              title="Note Taking API"
              description="This project provides a user-friendly RESTful API for managing your notes.
              Perfect for creating personal note-taking applications or integrating notes into other projects."
              ghLink="https://github.com/John-6670/Django-RestApi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

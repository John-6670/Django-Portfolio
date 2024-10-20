import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "../../Styles/Projects.css";
import api from "../../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      const cachedProjects = localStorage.getItem('projects');
      if (cachedProjects) {
          setProjects(JSON.parse(cachedProjects));
      } else {
          api
            .get("projects/")
            .then((res) => res.data)
            .then((data) => {
                setProjects(data);
                localStorage.setItem('projects', JSON.stringify(data));
            })
            .catch((err) => alert('Just wait a bit more for the projects to load!'));
      }
  }, []);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                  imgPath={project.images[0].image}
                  alt={`${project.title} image`}
                  title={project.title}
                  description={project.description}
                  ghLink={project.link}
                  technologies={project.technologies}
                  startDate={project.start_date}
                  endDate={project.end_date}
                  />
              </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

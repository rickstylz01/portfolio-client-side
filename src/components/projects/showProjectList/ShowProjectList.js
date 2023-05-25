import React, {useEffect, useState} from "react";
import './ShowProjectList.css';
import ProjectCard from '../ProjectCard';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import Contact from "../../contact/Contact";
import Footer from "../../footer/Footer";


const ShowProjectList = () => {
  const [projects, setProjects] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    getAllProjectData();
    // eslint-disable-next-line
  }, []);

  const getAllProjectData = () => {
    axios
      .get(`${BACKEND_URL}/projects`)
      .then((res) => {
        const allProjects = res.data;
        setProjects(allProjects);
      })
      .catch(err => console.error(`Error: ${err}`));
  }

  return(
    <div className="ShowProjectList">
      <Container className="p-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project._id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>

      <Contact />
      <Footer />
    </div>
  );
}

export default ShowProjectList;

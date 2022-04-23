import React from 'react';
import {Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import {Button, Card} from "react-bootstrap";
import axios from "axios";
import useAuth from "../../hooks/UseAuth";

export const ShowProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state;
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const { id } = useParams();
  const { auth } = useAuth();

  const deleteProjectData = () => {
    axios
      .delete(`${BACKEND_URL}projects/${id}`)
      .then(navigate('../projects', { replace: true }))
      .catch(err => console.error(`Error: ${err}`));
  }
  //TODO: abstract show & delete buttons
  const showDeleteButton = () => {
    if (auth?.user) {
      return (
        <Button variant="outline-danger" onClick={deleteProjectData}>
          Delete Project
        </Button>
      )
    }
  }
  const showEditButton = () => {
    if (auth?.user) {
      return (
        <Link
          to={`/projects/${id}/edit`}
          className="btn btn-outline-info btn-lg ml-auto"
        >
          Edit Project
        </Link>
      )
    }
  }

  return (
    <div className="ShowProjectDetails col-8 offset-2 p-4">
      {showEditButton()}

      <Card className="mt-3 mb-3">
        <Card.Title className="p-3">{ project.title }</Card.Title>
        <Card.Img variant="top" src={project.imageUrl} />
        <Card.Body>
          <div><b>Role:</b> {project.role}</div>
          <div><b>Stack:</b> {project.techStack.map((stack, idx) => (
            <ul key={idx} className="mb-0">
              <li>{stack}</li>
            </ul>
          ))}</div>
          <Card.Text className="pt-3">
            {project.description}
          </Card.Text>
        </Card.Body>
      </Card>

      {showDeleteButton()}
    </div>
  );
}



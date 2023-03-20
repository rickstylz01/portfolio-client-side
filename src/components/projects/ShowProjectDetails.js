import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {Card} from "react-bootstrap";

export const ShowProjectDetails = () => {
  const location = useLocation();
  const project = location.state;
  // eslint-disable-next-line
  const { id } = useParams();

  return (
    <div className="ShowProjectDetails">
      <Card className="mt-3 mb-3">
        <Card.Title className="p-3">{ project.title }</Card.Title>
        <Card.Img variant="top" src={project.imageUrl} />
        <Card.Body>
          <a href={project.projectLink}>
            <Card.Text>
              Project Link
            </Card.Text>
          </a>
          <div><b>Role:</b> {project.role}</div>
          <div><b>Stack:</b> {project.techStack.map((stack, idx) => (
            <ul key={idx} className="mb-0">
              <li>{stack}</li>
            </ul>
          ))}
          </div>
          <Card.Text className="pt-3">
            {project.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}



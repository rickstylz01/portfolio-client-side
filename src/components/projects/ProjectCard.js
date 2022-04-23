import React from "react";
import {Button, Card} from "react-bootstrap";
import Fade from "react-reveal";
import {Link} from "react-router-dom";

const ProjectCard = (props) => {
  const project = props.project;

  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }

  return(
    <div className="ProjectCard">
      <Fade right>
        <Card>
          <Card.Img className="card-img-top" variant="top" src={project.imageUrl} />
          <Card.Body>
            <Card.Title>
              {truncateString(project.title, 20)}
            </Card.Title>
            <div><b>Role:</b> {project.role}</div>
            <Card.Text>
              <b>Description:</b> {truncateString(project.description, 100)}
            </Card.Text>
            <Link to={`/projects/${project._id}`} state={project}>
              <Button variant="primary">View Project</Button>
            </Link>
          </Card.Body>
        </Card>

      </Fade>
    </div>
  )
};

export default ProjectCard;

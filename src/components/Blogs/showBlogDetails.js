import React from 'react';
import {Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import {Button, Card, Container} from "react-bootstrap";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

export const ShowBlogDetails = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state;
  console.log('this is the location.state: ', blog);
  const { id } = useParams();
  const { auth } = useAuth();

  const deleteBlogData = () => {
    axios
      .delete(`${BACKEND_URL}blogs/${id}`)
      //because location.state = blog object, I can't use "from" here to navigate
      .then(navigate('../blogs', { replace: true }))
      .catch(err => console.error(`Error: ${err}`));
  }

//TODO: abstract show & delete buttons
  const showDeleteButton = () => {
    if (auth?.user) {
      return (
        <Button variant="outline-danger" onClick={deleteBlogData}>
          Delete Project
        </Button>
      )
    }
  }
  const showEditButton = () => {
    if (auth?.user) {
      return (
        <Link
          to={`/blogs/${id}/edit`}
          className="btn btn-outline-info btn-lg ml-auto"
        >
          Edit Project
        </Link>
      )
    }
  }

  return (
    <div className="ShowBlogDetails col-8 offset-2 p-4">
      <Container>
        {showEditButton()}

        <Card className="mt-3 mb-3">
          <Card.Title className="p-3">{ blog.title }</Card.Title>
          <Card.Img variant="top" src={blog.imageUrl} />
          <Card.Body>
            <div><b>Author:</b> {blog.author}</div>
            <Card.Text className="pt-3">
              {blog.description}
            </Card.Text>
          </Card.Body>
        </Card>

        {showDeleteButton()}
      </Container>
    </div>
  )
};

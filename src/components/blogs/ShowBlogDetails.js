import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Card, Container} from "react-bootstrap";

export const ShowBlogDetails = () => {
  const location = useLocation();
  const blog = location.state;

  return (
    <div className="ShowBlogDetails col-8 offset-2 p-4">
      <Container>
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
      </Container>
    </div>
  )
};

import React from "react";
import {Button, Card,} from "react-bootstrap";
import Fade from "react-reveal";
import {Link} from "react-router-dom";
import './BlogCard.css';

const BlogCard = (props) => {
  const blog = props.blog;

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
    <div className="BlogCard">
      <Fade right>
        <Card>
          <Card.Img className="card-img-top" variant="top" src={blog.imageUrl} />
          <Card.Body>
            <Card.Title>
              {truncateString(blog.title, 20)}
            </Card.Title>
            <div><b>Author:</b> {blog.author}</div>
            <Card.Text>
              <b>Description:</b> {truncateString(blog.description, 30)}
            </Card.Text>
            <Link to={`/blogs/${blog._id}`} state={blog}>
              <Button variant="primary">View Blog</Button>
            </Link>
          </Card.Body>
        </Card>
      </Fade>
    </div>
  )
};

export default BlogCard;

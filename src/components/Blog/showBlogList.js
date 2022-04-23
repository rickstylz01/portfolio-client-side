import React, {useEffect, useState} from "react";
import BlogCard from "../Blog/BlogCard/blogCard";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";

const ShowBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


  useEffect(() => {
    getAllBlogData();
  }, []);

  const getAllBlogData = () => {
    axios
      .get(`${BACKEND_URL}blogs`)
      .then((res) => {
        const allBlogs = res.data;
        setBlogs(allBlogs);
      })
      .catch(err => console.error(`Error: ${err}`));
  }

  return(
    <div className="ShowBlogList">
      <Container className="p-4">
        <Row xs={1} md={2} lg={4} className="g-4">
          {blogs.map((blog) => (
            <Col key={blog._id}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>

      <Contact />
      <Footer />
    </div>
  );
}

export default ShowBlogList;

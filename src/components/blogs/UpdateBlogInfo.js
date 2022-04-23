import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

export const UpdateBlogInfo = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const [blog, setBlog] =
    useState({
      title: '',
      imageUrl: '',
      description: '',
      publishDate: '',
      author: ''
    });

  function changeHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setBlog(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = () => {
    axios
      .get(`${BACKEND_URL}blogs/${id}`)
      .then((res) => {
        const currentBlog = res.data;
        setBlog(currentBlog);
      })
      .catch(err => console.error(`Error: ${err}`));
  }


  function submitHandler(e) {
    e.preventDefault();
    const data = {
      title: blog.title,
      imageUrl: blog.imageUrl,
      description: blog.description,
      author: blog.author
    };
    axios
      .put(`${BACKEND_URL}blogs/${id}/edit`, data)
      .then(res => {
        navigate(`../blogs/${id}`, { state: data });
      })
      .catch(err => {
        //TODO: use better err handling
        console.log("Error in UpdateBookInfo!");
      })
  }

  return(
    <div className="UpdateBlogInfo p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Blog</h1>
            <p className="lead text-center">
              Update Blog's Info
            </p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                className="form-control"
                value={blog.imageUrl}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={blog.title}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={blog.author}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={blog.description}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <button onClick={submitHandler} className="btn btn-outline-info brn-lg btn-block">
              Update Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlogInfo;

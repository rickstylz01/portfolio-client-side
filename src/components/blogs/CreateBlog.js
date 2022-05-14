import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();


  function submitHandler(e) {
    e.preventDefault();

    const data = {
      title: title,
      imageUrl: imageUrl,
      description: description,
      author: author
    };

    axios
      .post(`${BACKEND_URL}blogs`, data)
      .then(res => {
        navigate(`../blogs/`, { state: data });
      })
      .catch(err => {
        // TODO: use better err handling
        console.log(`Error in CreateBookInfo: ${err}`);
      })
  }

  return(
    <div className="CreateBlogInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">New Blog</h1>
            <p className="lead text-center">
              + New Blog
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
                placeholder="Enter Image URL"
                onChange={e => setImageUrl(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Enter title"
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                className="form-control"
                placeholder="Enter Author"
                onChange={e => setAuthor(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Enter Description"
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <br />

            <button onClick={submitHandler} className="btn btn-outline-info brn-lg btn-block">
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;

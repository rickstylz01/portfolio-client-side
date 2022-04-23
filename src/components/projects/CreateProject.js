import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [projectLink, setProjectLink] = useState("")

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    const data = {
      title: title,
      imageUrl: imageUrl,
      description: description,
      role: role,
      techStack: techStack,
      projectLink: projectLink
    };

    axios
      .post(`${BACKEND_URL}projects/new`, data)
      .then(res => {
        navigate(`../projects/`, { state: data });
      })
      .catch(err => {
        // TODO: use better err handling
        // if error - redirect to the edit page and display err
        console.log(`Error in CreateBookInfo: ${err}`);
      })
  }

  return(
    <div className="CreateProjectInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">New Project</h1>
            <p className="lead text-center">
              + New Project
            </p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate>
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

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                placeholder="Enter Role"
                onChange={e => setRole(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="projectLink">Project Link</label>
              <input
                type="text"
                name="projectLink"
                className="form-control"
                placeholder="Enter URL Link"
                onChange={e => setProjectLink(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="techStack">Tech Stack</label>
              <input
                type="text"
                name="techStack"
                className="form-control"
                placeholder="Enter Tech Stack"
                onChange={e => setTechStack([e.target.value].split(', '))}
              />
            </div>
            <br />

            <button
              onClick={submitHandler}
              className="btn btn-outline-info brn-lg btn-block"
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;

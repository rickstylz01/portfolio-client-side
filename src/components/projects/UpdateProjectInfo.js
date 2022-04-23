import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

export const UpdateProjectInfo = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] =
    useState({
      title: '',
      imageUrl: '',
      description: '',
      role: '',
      techStack: [],
      projectLink: ''
    });

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = () => {
    axios
      .get(`${BACKEND_URL}projects/${id}`)
      .then((res) => {
        const currentProject = res.data;
        setProject(currentProject);
      })
      .catch(err => console.error(`Error: ${err}`));
  }

  function changeHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setProject(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function arrayChangeHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setProject(prevState => ({
      ...prevState,
      [name]: value.split(', ')
    }))
  }

  function submitHandler(e) {
    e.preventDefault();
    //get project.techstack split sting into array
    const data = {
      title: project.title,
      imageUrl: project.imageUrl,
      description: project.description,
      role: project.role,
      techStack: project.techStack,
      projectLink: project.projectLink
    };
    axios
      .put(`${BACKEND_URL}projects/${id}/edit`, data)
      .then(res => {
        navigate(`../projects/${id}`, { state: data });
      })
      .catch(err => {
        //TODO: use better err handling
        console.log("Error in UpdateProjectInfo!");
      })
  }

  return(
    <div className="UpdateProjectInfo p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Project</h1>
            <p className="lead text-center">
              Update Project's Info
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
                defaultValue={project.title}
                onChange={e => changeHandler(e)}
              />

            </div>
            <br />

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                className="form-control"
                defaultValue={project.imageUrl}
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
                defaultValue={project.description}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                defaultValue={project.role}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="stack">Stack</label>
              <input
                type="text"
                name="techStack"
                className="form-control"
                defaultValue={project.techStack.join(', ')}
                onChange={e => arrayChangeHandler(e)}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="projectLink">Link</label>
              <input
                type="text"
                name="projectLink"
                className="form-control"
                defaultValue={project.projectLink}
                onChange={e => changeHandler(e)}
              />
            </div>
            <br />

            <button onClick={submitHandler} className="btn btn-outline-info brn-lg btn-block">
              Update Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProjectInfo;

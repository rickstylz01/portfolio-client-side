import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/landing/Landing";
import AboutMe from "./components/aboutMe/AboutMe";
import WithNav from "./components/WithNav";
import ShowBlogList from "./components/blogs/ShowBlogList/ShowBlogList";
import {ShowBlogDetails} from "./components/blogs/ShowBlogDetails";
import UpdateBlogInfo from "./components/blogs/UpdateBlogInfo";
import {LoginForm} from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import CreateBlog from "./components/blogs/CreateBlog";
import ShowProjectList from "./components/projects/ShowProjectList";
import {ShowProjectDetails} from "./components/projects/ShowProjectDetails";
import UpdateProjectInfo from "./components/projects/UpdateProjectInfo";
import CreateProject from "./components/projects/CreateProject";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route exact path="/" element={<Landing />} />

        <Route element={ <WithNav /> } >
          {/*--Public--*/}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<AboutMe />} />

          <Route path="/blogs" element={ <ShowBlogList />} />
          <Route path="/blogs/:id" element={ <ShowBlogDetails /> }/>

          <Route path="/projects" element={ <ShowProjectList />} />
          <Route path="/projects/:id" element={ <ShowProjectDetails /> }/>

          {/*--Protected--*/}
          <Route element={<RequireAuth />}>
            <Route path="/blogs/new" element={<CreateBlog />} />
            <Route path="/blogs/:id/edit" element={ <UpdateBlogInfo /> }  />
            <Route path="/blogs/:id/delete" />

            <Route path="/projects/new" element={<CreateProject />} />
            <Route path="/projects/:id/edit" element={ <UpdateProjectInfo /> }  />
            <Route path="/projects/:id/delete" />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

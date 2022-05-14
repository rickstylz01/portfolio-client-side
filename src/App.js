import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/landing/Landing";
import AboutMe from "./components/aboutMe/AboutMe";
import WithNav from "./components/WithNav";
import ShowBlogList from "./components/blogs/ShowBlogList/ShowBlogList";
import {ShowBlogDetails} from "./components/blogs/ShowBlogDetails";
import ShowProjectList from "./components/projects/showProjectList/ShowProjectList";
import {ShowProjectDetails} from "./components/projects/ShowProjectDetails";



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />

      <Route element={ <WithNav /> } >
        <Route path="/about" element={<AboutMe />} />

        <Route path="/blogs" element={ <ShowBlogList />} />
        <Route path="/blogs/:id" element={ <ShowBlogDetails /> }/>

        <Route path="/projects" element={ <ShowProjectList />} />
        <Route path="/projects/:id" element={ <ShowProjectDetails /> }/>
      </Route>
    </Routes>
  );
}

export default App;

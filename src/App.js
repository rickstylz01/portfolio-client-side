import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/landing";
import AboutMe from "./components/AboutMe/aboutMe";
import WithNav from "./components/withNav";
import ShowBlogList from "./components/Blogs/showBlogList";
import {ShowBlogDetails} from "./components/Blogs/showBlogDetails";
import UpdateBlogInfo from "./components/Blogs/updateBlogInfo";
import {LoginForm} from "./components/login";
import RequireAuth from "./components/requireAuth";
import Layout from "./components/layout";
import CreateBlog from "./components/Blogs/createBlog";


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

          {/*--Protected--*/}
          <Route element={<RequireAuth />}>
            <Route path="/blogs/new" element={<CreateBlog />} />
            <Route path="/blogs/:id/edit" element={ <UpdateBlogInfo /> }  />
            <Route path="/blogs/:id/delete" />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

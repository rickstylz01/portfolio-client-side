import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/landing";
import AboutMe from "./components/AboutMe/aboutMe";
import WithNav from "./components/withNav";
import ShowBlogList from "./components/Blog/showBlogList";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route element={ <WithNav /> } >
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blogs" element={ <ShowBlogList />} />

      </Route>
    </Routes>
  );
}

export default App;

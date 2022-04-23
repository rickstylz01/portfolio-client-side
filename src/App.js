import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/landing";
import AboutMe from "./components/AboutMe/aboutMe";
import WithNav from "./components/withNav";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route element={ <WithNav /> } >
        <Route path="/about" element={<AboutMe />} />
      </Route>
    </Routes>
  );
}

export default App;

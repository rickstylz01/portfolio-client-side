import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/landing";
import AboutMe from "./components/AboutMe/aboutMe";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/landing";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;

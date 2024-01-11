import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Appbar } from "./components/Appbar";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { AddCourse } from "./components/AddCourse";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Appbar />
      <Router>
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

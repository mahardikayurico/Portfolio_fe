import "./index.css";
import {
  HomePages,
  // EducationPages,
  // ExperiencePages,
  // ProjectPages,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        {/* <Route path="/education" element={<EducationPages />} />
        <Route path="/experience" element={<ExperiencePages />} /> */}
        {/* <Route path="/project" element={<ProjectPages />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

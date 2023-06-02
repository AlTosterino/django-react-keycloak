import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Resources from "./components/Resources";
export default function App() {
  return (
    <div className="container vh-100">
      <BrowserRouter>
        <Navbar />
        <div className="d-flex h-75 align-items-center justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resources />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

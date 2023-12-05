import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Signin from "./Components/Signin/Signin";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Signin" element={<Signin />} />
          {/* <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Get" element={<Get />} />   */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

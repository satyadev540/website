import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./compenents/Home";
import Navbar from "./compenents/navbar";
import Contact from "./compenents/contact";
import React, { useState, useEffect } from "react";
import Preloader from "./compenents/preloader";
import Projects from "./compenents/projects";
import Footer from "./compenents/footer";
import Particle from "./compenents/particles";
import Skills from "./compenents/skills";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when the action is complete
    }, 2000); // Simulate a 2-second delay
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <>
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Projects" element={<Projects />} />
                <Route exact path="/Skills" element={<Skills />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </>
        </div>
      )}
    </div>
  );
}

export default App;

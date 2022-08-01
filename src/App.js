import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/pages/Resume";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
          <Header />
          <NavTabs />
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resume" element={<Resume />} />
          
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
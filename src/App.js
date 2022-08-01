import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
          <Header />
          <NavTabs />
          <Routes exact path="/" component={Home} />
          <Routes exact path="/about" component={About} />
          <Routes exact path="/blog" component={Blog} />
          <Routes path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
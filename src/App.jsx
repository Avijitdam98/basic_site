import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

import "./styles/App.scss"
import './styles/home.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/mediaquery.scss'


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

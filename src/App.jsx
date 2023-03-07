import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipe" element={<Recipe />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/search/:name" element={<Search />}></Route>
      </Routes>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../Common/Header";
import { Project } from "./Project";
import { Contact } from "./Contact";
import Hero from "../Home/Hero";
import About from "./About";
import { Competence } from "./Competence";

export default function Page() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <Router>
        <Header dark={dark} setDark={setDark} />
        <Routes>
          <Route 
            path="/" 
            element={<Hero dark={dark} setDark={setDark} />} />
          <Route
            path="/About"
            element={<About dark={dark} setDark={setDark} />}
          />
          <Route
            path="/Project"
            element={<Project dark={dark} setDark={setDark} />}
          />
          <Route
            path="/Contact"
            element={<Contact dark={dark} setDark={setDark} />}
          />
          <Route
            path="/Competence"
            element={<Competence dark={dark} setDark={setDark} />}
          />
        </Routes>
      </Router>
    </>
  );
}

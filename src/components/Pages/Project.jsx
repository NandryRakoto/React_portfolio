import React from "react";
import { ProjectData } from "../Data/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "./Footer";

export const Project = ({ dark, setDark }) => {
  return (
    <>
      <section className={`Project ${dark ? "dark" : ""}`}>
        <div className="container">
          <h1>My last Projects</h1>
          <div className="grid3">
            {ProjectData.map((val, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                className={dark ? "cardProjetDark" : "cardProjet"}
                key={i}
              >
                <div className="imageProjet">
                  <img src={val.image} alt="" />
                </div>
                <p>{val.descri}</p>

                <code>{val.date}</code>
                <div className="buttonCard">
                  <button className="Git">
                    <a href={val.git}>Github</a>
                    <i className="bx bxl-github"></i>
                  </button>
                  <button>
                    <a href={val.demo}>Demo</a>
                    <i className="bx bx-show"></i>
                  </button>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

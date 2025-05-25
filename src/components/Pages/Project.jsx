import React from "react";
import { ProjectData } from "../Data/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
                    <Link to={val.git}>Github</Link>
                    <i className="bx bxl-github"></i>
                  </button>
                  <button>
                    <Link to={val.demo}>Demo</Link>
                    <i className="bx bx-show"></i>
                  </button>
                  <Link to={val.git}>
                    <i className="bx bx-share-alt"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

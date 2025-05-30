import React from "react";
import "../../index.css";
import { AboutData } from "../Data/Data";
import "boxicons/css/boxicons.min.css";
import image from "../../Images/me1.jpg";
import { motion } from "framer-motion";
import { Footer } from "./Footer";

export default function About({ dark, setDark }) {
  return (
    <>
      <section className={`About ${dark ? "dark" : ""}`}>
        <div className="container flex flex1">
          <div className="information">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className={dark ? "gris" : ""}
            >
              I am a dedicated student at CNTEMAD, passionate about computer
              science and web development. Self-taught and highly motivated, I
              constantly seek to improve my skills and push my limits.

              I am a dedicated student at CNTEMAD, passionate about computer science and web development. Self-taught and highly motivated, I constantly seek to improve my skills and push my limits.

            </motion.p>
            <div className="grid">
              {AboutData.map((val, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  className={dark ? "cardDark" : "card"}
                  key={i}
                >
                  <i className={val.icone}></i>
                  <h3>{val.titre}</h3>
                  <p className={dark ? "gris" : ""}>{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="AboutImage">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              src={image}
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

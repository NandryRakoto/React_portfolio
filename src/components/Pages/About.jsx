import React from "react";
import "../../index.css";
import { AboutData } from "../Data/Data";
import "boxicons/css/boxicons.min.css";
import image from "../../Images/image.png";
import { motion } from "framer-motion";

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
              About me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className={dark ? "gris" : ""}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
              ratione sed suscipit quo nesciunt voluptas eum quia. Ex modi hic
              consequatur aspernatur eveniet dolores tenetur! Tenetur
              repellendus consequatur excepturi.
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
    </>
  );
}

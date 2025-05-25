import React from "react";
import { CircularProgress } from "@mui/material";
import { SkillData } from "../Data/Data";
import { motion } from "framer-motion";

export const Competence = ({ dark, setDark }) => {
  return (
    <>
      <section className={`competence ${dark ? "dark" : ""}`}>
        <div className="skillContainer container">
          {SkillData.map((skill) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="skill"
              key={skill.label}
            >
              <div className="circleContainer">
                <CircularProgress
                  variant="determinate"
                  value={skill.value}
                  thickness={3}
                  size={80}
                  className="circle"
                  style={{ color: skill.color }}
                />
                <img src={skill.image} alt="" className="skillLoogo" />

                <p className="label">{skill.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

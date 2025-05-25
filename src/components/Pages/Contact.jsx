import React, { useState } from "react";
import { ContactData } from "../Data/Data";
import image from "../../Images/im (1).jpg";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

export const Contact = ({ dark, setDark }) => {
  const [state, handleSubmit] = useForm("mbljvyzd");

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    numero: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const result = await handleSubmit(e);

    if (state.succeeded) {
      toast.success("Message envoyé avec succès !");
      setFormData({
        nom: "",
        email: "",
        numero: "",
        message: "",
      });
    } else {
      toast.error("Une erreur est survenue, réessaie plus tard.");
    }
  };

  return (
    <>
      <section className={`contact ${dark ? "dark" : ""}`}>
        <h1>CONTACT</h1>
        <div className="contactForm container">
          <div className="reseau2">
            {ContactData.map((val, i) => (
              <div className="reseau1" key={i}>
                <div className="iconeContact">
                  <motion.i
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                    className={val.icones}
                  ></motion.i>
                </div>
                <h3>{val.titre}</h3>
                <p>{val.text}</p>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0 }}
            className="formulaire"
          >
            <div className="imageContact">
              <img src={image} alt="" />
            </div>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="nom"
                required
                placeholder="Your name"
                value={formData.nom}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
              <input
                type="number"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
                placeholder="Your number"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

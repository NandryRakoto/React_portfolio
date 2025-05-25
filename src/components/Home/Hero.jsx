import React from 'react'
import image from '../../Images/image.png';
import '../../index.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero({dark , setDark}) {
  
  return (
    <>
      <section className={dark ? "dark" : "Home"}>
        <div className="container Home1">
          <motion.div 
            initial = {{opacity : 0 ,x : -100}}
            animate = {{opacity : 1 , x : 0}}
            transition={{duration : 0.6,delay : 0}}
          className="text">
            <h4>Launch your project with confidence</h4>
            <h2>Hi, I’m <span>Nandrianina</span>, Front-End Developer</h2>
            <p>I specialize in creating smooth, responsive, and user-friendly web interfaces. Passionate about clean code and modern design, I turn your ideas into reality with HTML, CSS, JavaScript, and React. Let’s build something great together!</p>
            <Link to="/Project"><button>Get started</button></Link>
          </motion.div>
          <div className="image">
            <motion.img 
            initial = {{opacity : 0 ,x : 200}}
            animate = {{opacity : 1 , x : 0}}
            transition={{duration : 0.6,delay : 0}} src={image} alt="mon_image" />
          </div>
        </div>
      </section>
    </>
  )
}


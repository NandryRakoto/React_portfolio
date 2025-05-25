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
            <h4>Create your site like a pro</h4>
            <h2>Hi , I'm  <span>Nandrianina</span>,Web Developer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque praesentium animi error quaerat harum, ut laudantium. Natus accusamus tenetur debitis tempora! Ipsam necessitatibus nostrum, assumenda placeat quibusdam quaerat aut deserunt.</p>
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


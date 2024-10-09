import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from '../assets/conect.png';
import { BsWhatsapp, BsLinkedin, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
            Entre em Contato
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Vamos nos <br/> Conectar!
            </h2>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:items-center'>
             <a href='https://www.linkedin.com/in/jezebel-guedes'>
              <BsLinkedin/>
              </a>
              <a href='https://wa.me/5511957333990'>
              <BsWhatsapp/>
              </a>
              <a href='https://www.facebook.com/jezebel.bythe'>
              <BsFacebook/>
              </a>
            </div>
            </div>
        </motion.div>
        <motion.div
        variants={fadeIn('down', 0.5)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount: 0.7 }}
         className='flex-1'
        >
        <img src={Image} alt='Conectar'width={400} />
        </motion.div>
        </div>
        </div>
    </section>
  );
};

export default Contact;
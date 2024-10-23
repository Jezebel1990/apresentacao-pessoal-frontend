import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from '../assets/conect.png';
import { BsWhatsapp, BsLinkedin, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <section className='py-60 lg:section flex items-center' id='contact'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col justify-center items-center text-center sm:text-left'
          >
            <div>
              <h2 className='h2 text-accent'>
              <span className='hidden sm:block'>Entre em Contato</span> {/* Exibido no desktop */}
                <span className='block sm:hidden'>Entre</span> {/* Exibido apenas no mobile */}
                <span className='block sm:hidden'>em Contato</span> {/* Exibido apenas no mobile */}
    
              </h2>

              <h2 className='text-[45px] sm:text-[55px] lg:text-[60px] leading-tight mb-8'>
                Vamos nos <br /> Conectar!
              </h2>

              <div className='flex justify-center sm:justify-start text-[20px] gap-x-6'>
                <a href='https://www.linkedin.com/in/jezebel-guedes'>
                  <BsLinkedin />
                </a>
                <a href='https://wa.me/5511957333990'>
                  <BsWhatsapp />
                </a>
                <a href='https://www.facebook.com/jezebel.bythe'>
                  <BsFacebook />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex justify-center items-center'
          >
            <img 
              src={Image} 
              alt='Conectar' 
              className='w-[200px] sm:w-[250px] lg:w-[500px] object-contain' 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

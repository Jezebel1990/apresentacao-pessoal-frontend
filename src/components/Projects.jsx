import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; 
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';

const Projects = () => {
  return (
    <section className='section' id='projects'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>

          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 text-center lg:text-left'
          >
            <div className='flex flex-col items-center lg:items-start'>
              <h2 className='h2 leading-tight text-accent'>
                Meus Projetos <br />
                Recentes
              </h2>
              <p className='max-w-sm mb-16'>
                Tenho orgulho em compartilhar alguns dos projetos mais recentes nos quais trabalhei, aplicando minhas habilidades em desenvolvimento web e soluções inovadoras.
              </p>
              <a href='https://github.com/Jezebel1990'>
                <button className='btn btn-sm'>Ver Todos os Projetos</button>
              </a>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1} alt='Projeto 1' 
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Next.js, Tailwind CSS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href='https://github.com/Jezebel1990/generate-images.git'>
                  <span className='text-3xl text-white'>MagicAi - Generate Images</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-16'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2} alt='Projeto 2'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>React.js, Next.js, Tailwind CSS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href='https://github.com/Jezebel1990/metaverse.git'>
                  <span className='text-3xl text-white'>Metaverso Sideral</span>
                </a>
              </div>
            </div>

            {/* Terceiro projeto */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3} alt='Projeto 3'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>React, JavaScript, Tailwind CSS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href='https://github.com/Jezebel1990/ecommerce-shop.git'>
                  <span className='text-3xl text-white'>Fashion Shop</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

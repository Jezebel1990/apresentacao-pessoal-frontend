import React from 'react';

import Image from '../assets/about.png'

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
     <section className='section' id='about' ref={ref} >
     <div className='container mx-auto'>
     <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

     <motion.div
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
      mix-blend-lighten bg-top'></motion.div>
     <img src={Image} alt='About' width={450} />

      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1'
      >
        <h2 className='h2 text-accent'>Sobre mim</h2>
        <h3 className='h3 mb-4'>Sou uma Desenvolvedora Web Front-End</h3>
        <p className='mb-6'>
          Formada em Tecnologia Ambiental, migrei para o Desenvolvimento Web buscando criar soluções tecnológicas inovadoras.
           Gosto de trabalhar em equipe e manter uma comunicação clara, sempre focada em atender às necessidades dos clientes.
           Nas horas livres, adoro visitar exposições, ler livros e maratonar doramas.
          </p>
       
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {inView ? <CountUp  start={0} end={3} duration={3}/> : null }
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Anos de <br/>
              Experiência
            </div>
          </div>
          <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {inView ? <CountUp  start={0} end={12} duration={3}/> : null }
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projetos <br/>
              Concluídos
            </div>
          </div>
        </div>
       
 <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
  <button className='btn btn-lg'>Conectar</button>
  <a href='#' className='text-gradient btn-link'>
    Meus Projetos
  </a>
 </div>
 </motion.div> 
      </div>
     </div>
    </section>
  );
};

export default About;
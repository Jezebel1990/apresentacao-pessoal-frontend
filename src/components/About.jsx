import React from 'react';
import Image from '../assets/about.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-40 lg:gap-y-0 h-auto'>
          
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-no-repeat h-[320px] sm:h-[400px] lg:h-[640px] mix-blend-lighten bg-top'>
            <img 
              src={Image} 
              alt='About' 
              className='w-full h-full object-contain' 
            />
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim</h2>
            <h3 className='h3 mb-4'>Sou uma Desenvolvedora Web Front-End</h3>
            <p className='mb-6'>
              Formada em Tecnologia Ambiental, migrei para o Desenvolvimento Web buscando criar soluções tecnológicas inovadoras.
              Gosto de trabalhar em equipe e manter uma comunicação clara, sempre focada em atender às necessidades dos clientes.
              Nas horas livres, adoro visitar exposições, ler livros e maratonar doramas.
            </p>
          
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[30px] sm:text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3}/> : null }
                </div>
                <div className='font-primary text-xs sm:text-sm tracking-[2px]'>
                  Anos de <br/>
                  Experiência
                </div>
              </div>
              <div>
                <div className='text-[30px] sm:text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3}/> : null }
                </div>
                <div className='font-primary text-xs sm:text-sm tracking-[2px]'>
                  Projetos <br/>
                  Concluídos
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row max-w-max gap-y-4 sm:gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href='#contact'>
              <button className='btn btn-lg'>Conectar</button>
              </a>
              <a href='#projects' className='text-gradient btn-link'>
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

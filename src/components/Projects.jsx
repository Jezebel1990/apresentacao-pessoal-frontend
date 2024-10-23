import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; 
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Import chevron icons

const projects = [
  {
    img: Img1,
    tech: 'Next.js, Tailwind CSS',
    link: 'https://github.com/Jezebel1990/generate-images.git',
    title: 'MagicAi - Generate Images',
  },
  {
    img: Img2,
    tech: 'React.js, Next.js, Tailwind CSS',
    link: 'https://github.com/Jezebel1990/metaverse.git',
    title: 'Metaverso Sideral',
  },
  {
    img: Img3,
    tech: 'React, JavaScript, Tailwind CSS',
    link: 'https://github.com/Jezebel1990/ecommerce-shop.git',
    title: 'Fashion Shop',
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

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

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl hidden lg:flex'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={projects[0].img} alt='Projeto 1' 
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{projects[0].tech}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href={projects[0].link}>
                  <span className='text-3xl text-white'>{projects[0].title}</span>
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
            {projects.slice(1).map((project, index) => (
              <div key={index} className='group relative overflow-hidden border-2 border-white/50 rounded-xl hidden lg:flex'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={project.img}
                  alt={`Projeto ${index + 2}`} 
                />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>{project.tech}</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                  <a href={project.link}>
                    <span className='text-3xl text-white'>{project.title}</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Exibi apenas na versão mobile */}
            <div className='lg:hidden relative group overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
              <img
                className='group-hover:scale-125 transition-all duration-500 '
                src={projects[currentProjectIndex].img} 
                alt={`Projeto ${currentProjectIndex + 1}`} 
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{projects[currentProjectIndex].tech}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href={projects[currentProjectIndex].link}>
                  <span className='text-3xl text-white'>{projects[currentProjectIndex].title}</span>
                </a>
              </div>

              {/* Setas para navegação ajustadas */}
              <button onClick={prevProject} className='absolute top-1/2 right-4 transform -translate-y-1/2 z-50 p-2 bg-black rounded-full'>
                <FaChevronRight className='text-white' />
              </button>
              <button onClick={nextProject} className='absolute top-1/2 left-4 transform -translate-y-1/2 z-50 p-2 bg-black rounded-full'>
                <FaChevronLeft className='text-white' />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

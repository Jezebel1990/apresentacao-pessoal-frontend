import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/skills.png';
import { fadeIn } from '../variants';

const skillsData = [
  { 
    name: 'JavaScript', 
    description: 'Experiência avançada com ES6+, frameworks e bibliotecas.' 
  },
  { 
    name: 'React', 
    description: 'Desenvolvimento de SPAs com hooks, state management e otimização.' 
  },
  { 
    name: 'Next.js', 
    description: 'Full-stack framework para SSR e SSG com integração de APIs.' 
  },
  { 
    name: 'Node.js', 
    description: 'Criação de APIs REST e integração com bancos de dados relacionais e não-relacionais.' 
  },
  { 
    name: 'Tailwind CSS', 
    description: 'Desenvolvimento de interfaces responsivas e estilização eficiente.' 
  },

  { 
    name: 'UX/UI Design', 
    description: 'Criação de interfaces intuitivas e centradas no usuário com foco em experiência.' 
  },
  { 
    name: 'Jest e Cypress', 
    description: 'Testes unitários e end-to-end para garantir a qualidade do código.' 
  },
];

const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-start text-center lg:text-left'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>Minhas Habilidades</h2>
            <h3 className='h3 max-w-[455px] mb-6'>
              Como desenvolvedora web, possuo um conjunto diversificado de habilidades que me permitem transformar ideias em soluções digitais inovadoras.
            </h3>
            <a href='#projects'>
              <button className='btn btn-sm mb-6'>Veja meus projetos</button>
            </a>

            <img 
              src={Image} 
              alt='Habilidades' 
              className='w-full h-[200px] sm:h-auto object-contain mx-auto' 
            />
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div className='flex flex-col items-center lg:items-start'>
              {skillsData.map((skill, index) => {
                const { name, description } = skill;
                return (
                  <div
                    className='border-b border-white/20 h-auto mb-[38px] flex flex-col max-w-[476px]'
                    key={index}
                  >
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-2'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

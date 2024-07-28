import React, { useState, useContext } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

// about data english
const aboutDataEnglish = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <SiTailwindcss key="SiTailwindcss" />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="FaFigma" />,
        ],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'React Js Course - Coderhouse',
        stage: 'Issued Feb. 2024 · Expires Apr. 2024',
        credentialId: '6636c9cfeb5a276e94f95c91',
        skills: ['React.js'],
      },
      {
        title: 'JavaScript Course - Coderhouse',
        stage: 'Issued Nov. 2023 · Expires Jan. 2024',
        credentialId: '65cd0b88c3b3ca21f27c49a9',
        skills: ['JavaScript'],
      },
      {
        title: 'Frontend Development Career React - Coderhouse',
        stage: 'Issued Aug. 2023 · Expires Apr. 2024',
        credentialId: 'undefined',
        skills: [],
      },
      {
        title: 'Web Development Course - Coderhouse',
        stage: 'Issued Aug. 2023 · Expires Oct. 2023',
        credentialId: '6548efa0c908ff795f4b5d3b',
        skills: ['HTML5', 'Git', 'GitHub', 'CSS', 'JavaScript'],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Top 10 in JavaScript Course - Coderhouse',
        stage: '2023',
      },
      {
        title: 'Top 10 in React Course - Coderhouse',
        stage: '2024',
      },
    ],
  },
];

// about data spanish
const aboutDataSpanish = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Desarrollo Web',
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <SiTailwindcss key="SiTailwindcss" />
        ],
      },
      {
        title: 'Diseño UI/UX',
        icons: [
          <FaFigma key="FaFigma" />,
        ],
      },
    ],
  },
  {
    title: 'credenciales',
    info: [
      {
        title: 'Curso de React Js - Coderhouse',
        stage: 'Emitido Feb. 2024 · Expira Abr. 2024',
        credentialId: '6636c9cfeb5a276e94f95c91',
        skills: ['React.js'],
      },
      {
        title: 'Curso de JavaScript - Coderhouse',
        stage: 'Emitido Nov. 2023 · Expira Ene. 2024',
        credentialId: '65cd0b88c3b3ca21f27c49a9',
        skills: ['JavaScript'],
      },
      {
        title: 'Carrera de Desarrollo Frontend con React - Coderhouse',
        stage: 'Emitido Ago. 2023 · Expira Abr. 2024',
        credentialId: 'undefined',
        skills: [],
      },
      {
        title: 'Curso de Desarrollo Web - Coderhouse',
        stage: 'Emitido Ago. 2023 · Expira Oct. 2023',
        credentialId: '6548efa0c908ff795f4b5d3b',
        skills: ['HTML5', 'Git', 'GitHub', 'CSS', 'JavaScript'],
      },
    ],
  },
  {
    title: 'premios',
    info: [
      {
        title: 'Top 10 en el Curso de JavaScript - Coderhouse',
        stage: '2023',
      },
      {
        title: 'Top 10 en el Curso de React - Coderhouse',
        stage: '2024',
      },
    ],
  },
];

// import language context
import LanguageContext from '../../context/LanguageContext';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  const { selectedLanguage } = useContext(LanguageContext);

  const aboutData = selectedLanguage === 'english' ? aboutDataEnglish : aboutDataSpanish;

  const sectionText = {
    english: {
      heading: "Captivating",
      heading2: "birth magnificent designs.",
      accent: " stories",
      subheading: "2 years ago, I began freelancing as a developer",
      experience: "Years of experience",
      projects: "Finished projects",
    },
    español: {
      heading: "Cautivantes",
      heading2: "dan lugar a diseños magníficos.",
      accent: " historias",
      subheading: "Hace 2 años comencé a trabajar como desarrollador freelance",
      experience: "Años de experiencia",
      projects: "Proyectos terminados",
    },
  };

  const text = sectionText[selectedLanguage];

  return (
    <div className='h-full bg-primary/10 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute -bottom-[5%] -left-[300px]'>
        <div className='w-[550px]'>
          <Avatar />
        </div>
      </motion.div>
      <div className='container mx-auto h-full w-full flex flex-col z-20 items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-start'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2'>
            {text.heading}
            <span className='text-accent'>{text.accent}</span>
            <br></br>
            {text.heading2}
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            {text.subheading}
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='hidden md:flex md:max-x-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={16} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  {text.experience}
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={12} duration={8} />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  {text.projects}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-20 relative'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${index === itemIndex ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-500" : "after:bg-white"}`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className='flex-1 flex flex-col'>
                <div className='font-semibold text-lg mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div className='text-sm'>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-2xl'>{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
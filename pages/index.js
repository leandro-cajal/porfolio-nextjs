// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { useContext, useEffect } from 'react';
import LanguageContext from '../context/LanguageContext';

// framer Motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from '../variants'

const texts = {
  english: {
    heading1: "Where Creativity ",
    heading2: "Meets Code",
    body: "As a Front-End developer, I am driven by a passion for technology and a commitment to continuous learning. I love solving problems and transforming ideas into engaging digital realities, ensuring every project offers a seamless and intuitive user experience."
  },
  español: {
    heading1: "Donde Creatividad ",
    heading2: "y Código Convergen",
    body: "Como desarrollador Front-End, me impulsa una pasión por la tecnología y un compromiso con el aprendizaje continuo. Me encanta resolver problemas y transformar ideas en realidades digitales atractivas, asegurando que cada proyecto ofrezca una experiencia de usuario fluida e intuitiva."
  }
};

const Home = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  // Verifica que selectedLanguage tenga un valor válido
  const languageTexts = texts[selectedLanguage] || texts.english;

  useEffect(() => {
    console.log(selectedLanguage);
    console.log(languageTexts.heading2);
  }, [selectedLanguage]);

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full relative bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1">
            {languageTexts.heading1} <br />
            <span className="text-accent pl-2">{languageTexts.heading2}</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12">
            {languageTexts.body}
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex -mt-5"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1440px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[550px] absolute -bottom-[25%] xl:right-[15%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

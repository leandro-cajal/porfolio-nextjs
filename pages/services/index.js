// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

// language context
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';


const Services = () => {

  const { selectedLanguage } = useContext(LanguageContext);



  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'>{selectedLanguage === "english" ? "My services" : "Mis Servicios"}<span className='text-accent'>.</span></motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              {selectedLanguage === "english" ? "I specialize in creating responsive, dynamic user interfaces with the latest technologies. My services include web development and problem-solving for seamless digital experiences. Always learning." : "Me especializo en crear interfaces de usuario dinámicas y responsivas con las últimas tecnologías. Mis servicios incluyen desarrollo web y resolución de problemas para experiencias digitales sin interrupciones. Siempre aprendiendo."}
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

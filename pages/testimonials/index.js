// components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';


//language context
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

const Testimonials = () => {

  const {selectedLanguage} = useContext(LanguageContext);

  return (
    <div className="h-full bg-primary/30 py32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 mb-8 xl:mb-0">{selectedLanguage === "english" ? "What clients" : "Lo que los clientes"} <span className="text-accent">{selectedLanguage === "english" ? "say." : "dicen."}</span></motion.h2>
        {/* slider */}
        <motion.div 
           variants={fadeIn('up', 0.4)}
           initial='hidden'
           animate='show'
           exit='hidden'

        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

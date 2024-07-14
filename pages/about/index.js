import React, { useState } from 'react';

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


// about data
const aboutData = [
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
  },{
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

  return (
    <div className='h-full bg-primary/10 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute -bottom-[5%] -left-[300px]'>
        <div className=' w-[550px]'>
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
            Captivating <span className='text-accent'>stories</span> birth magnificent designs.</motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>2 years ago, I began freelancing as a developer</motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='hidden md:flex md:max-x-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={16} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={12} duration={8} />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={6} duration={12} />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
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
                {/* title */}
                <div className='font-semibold text-lg mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div className='text-sm'>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/* icons */}
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

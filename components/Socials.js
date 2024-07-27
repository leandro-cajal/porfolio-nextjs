//links
import Link from "next/link";

//icons
import { RiLinkedinLine, RiGithubLine, RiArrowDownSFill } from 'react-icons/ri';
import { FaFileAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


import { useState } from "react";

const Socials = () => {
  const [language, setLanguage] = useState("english");


  return <div className="flex items-center gap-x-5 text-lg">
    <Link target="_blank" href={'https://www.linkedin.com/in/leandro-javier-cajal-996899128/'} className="hover:text-accent text-xl transition-all duration-300" title="Linkedin">
      <RiLinkedinLine />
    </Link>
    <Link target="_blank" href={'https://github.com/leandro-cajal'} className="hover:text-accent text-xl transition-all duration-300" title="Github">
      <RiGithubLine />
    </Link>
    <Link href="/leandro-cajal-cv-en.pdf" target="_blank" className="hover:text-accent transition-all duration-300" title="CV">
      <FaFileAlt />
    </Link>
    <div className="relative">
      <button className="rounded-full flex gap-2 px-2 py-1 items-center bg-white/15 hover:text-accent text-2xl transition-all duration-300">
        <BiWorld />
        <span className="capitalize text-xs">{language}</span>
        <RiArrowDownSFill />
      </button>
      <ul className="absolute flex items-center flex-col space-y-6 bg-white/15 rounded-md p-4 text-xs w-full top-9 left-0">
        <li className="hover:text-accent transition-all duration-300 cursor-pointer">English</li>
        <li className="hover:text-accent transition-all duration-300 cursor-pointer">Español</li>
      </ul>
    </div>
  </div>;
};
export default Socials;

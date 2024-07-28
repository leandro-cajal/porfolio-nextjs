//links
import Link from "next/link";

//icons
import { RiLinkedinLine, RiGithubLine, RiArrowDownSFill } from 'react-icons/ri';
import { FaFileAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

import LanguageContext from "../context/LanguageContext";

import { useState, useContext } from "react";

const Socials = () => {
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageClick = (language) => {
    changeLanguage(language);
    setIsDropdownVisible(false);
  };

  const resumeLink = (selectedLanguage === "español" ? "/leandro-cajal-cv.pdf" : "/leandro-cajal-cv-en.pdf")

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link target="_blank" href={'https://www.linkedin.com/in/leandro-javier-cajal-996899128/'} className="hover:text-accent text-xl transition-all duration-300" title="Linkedin">
        <RiLinkedinLine />
      </Link>
      <Link target="_blank" href='https://github.com/leandro-cajal' className="hover:text-accent text-xl transition-all duration-300" title="Github">
        <RiGithubLine />
      </Link>
      <Link href={resumeLink} target="_blank" className="hover:text-accent transition-all duration-300" title="CV">
        <FaFileAlt />
      </Link>
      <div className="relative">
        <button onClick={handleButtonClick} className="min-w-[128px] rounded-full justify-between flex px-2 py-1 items-center bg-white/15 hover:bg-accent text-2xl transition-all duration-300">
          <BiWorld />
          <span className="capitalize text-xs">{selectedLanguage}</span>
          <RiArrowDownSFill />
        </button>
        {isDropdownVisible && (
          <ul className="absolute grid grid-cols-1 backdrop-blur-lg bg-white/15 rounded-2xl divide-y divide-white/15 text-xs overflow-hidden w-full top-9 left-0">
            <li
              className="capitalize transition-all duration-300 cursor-pointer hover:bg-accent p-3"
              onClick={() => handleLanguageClick('english')}
            >
              english
            </li>
            <li
              className="capitalize transition-all duration-300 cursor-pointer p-3 hover:bg-accent"
              onClick={() => handleLanguageClick('español')}
            >
              español
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Socials;

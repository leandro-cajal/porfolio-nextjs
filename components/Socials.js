// links
import Link from "next/link";

//icons
import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
import { FaFileAlt } from 'react-icons/fa';

const Socials = () => {
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
  </div>;
};
export default Socials;

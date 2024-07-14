// links
import Link from "next/link";

//icons
import {
  RiLinkedinLine, 
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link target="_blank" href={'https://www.linkedin.com/in/leandro-javier-cajal-996899128/'} className="hover:text-accent text-xl transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link target="_blank" href={'https://github.com/leandro-cajal'} className="hover:text-accent text-xl transition-all duration-300">
      <RiGithubLine />
    </Link>
  </div>;
};
export default Socials;

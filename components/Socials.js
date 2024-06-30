// links
import Link from "next/link";

//icons
import {
  RiLinkedinLine, 
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent text-xl transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent text-xl transition-all duration-300">
      <RiGithubLine />
    </Link>
  </div>;
};
export default Socials;

import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ">
    <img 
      className="ml-auto rounded-full translate-z-0 w-full h-full" 
      src={'/avatar-3-ai.png'} 
      alt="" />
  </div>;
};

export default Avatar;

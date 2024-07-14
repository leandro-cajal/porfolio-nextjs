import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ">
    <Image 
      className="ml-auto rounded-full translate-z-0 w-full h-full" 
      src={'/avatar2.png'}
      width={737}
      height={678} 
      alt="" />
  </div>;
};

export default Avatar;
